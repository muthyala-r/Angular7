package com.shopping.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.model.Product;
import com.shopping.service.ProductRepository;

@RestController
public class ProductController {
  
	private ProductRepository repo;
	
	public ProductController(ProductRepository repo) {
		// TODO Auto-generated constructor stub
		this.repo = repo;
	}
	
	@GetMapping("/product")
	public Collection<Product> getProducts(){
		return repo.findAll().stream().collect(Collectors.toList());
	}
	
}
