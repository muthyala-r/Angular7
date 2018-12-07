package com.shopping.service;

import org.springframework.data.repository.CrudRepository;

import com.shopping.model.Category;

public interface CategoryRepository extends CrudRepository<Category, Long>{

}
