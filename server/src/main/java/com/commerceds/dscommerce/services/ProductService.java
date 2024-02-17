package com.commerceds.dscommerce.services;

import com.commerceds.dscommerce.dto.ProductDTO;
import com.commerceds.dscommerce.entities.Product;
import com.commerceds.dscommerce.repositories.ProductRepository;
import com.commerceds.dscommerce.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public ProductDTO findById(Long id){
        Product product = productRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Recurso não encontrado"));
        return new ProductDTO(product);
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
        Product entity = productRepository.findById(id).orElseThrow();
        copyClassValues(dto, entity, id);
        productRepository.save(entity);

        return new ProductDTO(entity);
    }

    @Transactional
    public void delete(Long id){
        productRepository.deleteById(id);
    }

    public void copyClassValues(ProductDTO dto, Product product, Long id){
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setImgUrl(dto.getImgUrl());
    }
}
