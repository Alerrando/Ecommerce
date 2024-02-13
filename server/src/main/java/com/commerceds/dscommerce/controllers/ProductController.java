package com.commerceds.dscommerce.controllers;

import com.commerceds.dscommerce.dto.ProductDTO;
import com.commerceds.dscommerce.entities.Product;
import com.commerceds.dscommerce.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping(value = "/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(productService.findById(id));
    }

    @GetMapping
    public ResponseEntity findAll(Pageable pageable){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(productService.findAll(pageable));
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody ProductDTO productDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.insert(productDTO));
    }
}
