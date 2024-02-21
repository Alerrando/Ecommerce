package com.commerceds.dscommerce.services;

import com.commerceds.dscommerce.dto.CustomError;
import com.commerceds.dscommerce.dto.ProductDTO;
import com.commerceds.dscommerce.entities.Product;
import com.commerceds.dscommerce.repositories.ProductRepository;
import com.commerceds.dscommerce.services.exceptions.DatabaseException;
import com.commerceds.dscommerce.services.exceptions.ResourceNotFoundException;
import org.hibernate.tool.schema.spi.ExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public ResponseEntity<ProductDTO> findById(Long id){
            Product product = productRepository.findById(id).orElseThrow(
                    () -> new ResourceNotFoundException("Recurso não encontrado"));
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ProductDTO(product));
    }

    @Transactional(readOnly = true)
    public Page<ProductDTO> findAll(Pageable pageable){
        Page<Product> products = productRepository.findAll(pageable);
        return products.map(x -> new ProductDTO(x));
    }

    @Transactional
    public ProductDTO insert(ProductDTO dto){
        Product entity = new Product(dto);
        productRepository.save(entity);

        return new ProductDTO(entity);
    }

    @Transactional
    public ProductDTO update(Long id, ProductDTO dto){
        try {
            Optional<Product> entity = productRepository.findById(id);
            copyClassValues(dto, entity.get(), id);
            productRepository.save(entity.get());

            return new ProductDTO(entity.get());
        }
        catch (NoSuchElementException e){
            throw new ResourceNotFoundException("Recurso não encontrado");
        }
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    // Esse parametro só executara o Transiction se o método estver no contexto de outra transação
    public void delete(Long id){
        if (!productRepository.existsById(id)){
            throw new ResourceNotFoundException("Recurso não encontrado");
        }
        try {
            productRepository.deleteById(id);
        }
        catch (DataIntegrityViolationException e){
            throw new DatabaseException("Falha de integridade referencial");
        }
    }

    public void copyClassValues(ProductDTO dto, Product product, Long id){
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setImgUrl(dto.getImgUrl());
    }
}
