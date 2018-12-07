package com.shopping.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.model.Category;
import com.shopping.service.CategoryRepository;


@RestController
@RequestMapping("/shopping")
@CrossOrigin(origins="http://localhost:4200")
public class CategoryController {

	@Autowired
	private CategoryRepository repository;
	
	@GetMapping("/category")
	public List<Category> getAllcategory(){
		System.out.println("Gel All category");
		List<Category> category = new ArrayList<>();
		repository.findAll().forEach(category::add);
		return category;
	}
	
}
