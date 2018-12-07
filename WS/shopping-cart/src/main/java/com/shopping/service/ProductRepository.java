package com.shopping.service;

import org.springframework.data.repository.CrudRepository;

import com.shopping.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{

}
