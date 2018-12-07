package com.shopping;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.shopping.model.Product;
import com.shopping.service.ProductRepository;

@SpringBootApplication
public class NgShoppingListApplication {

	public static void main(String[] args) {
		SpringApplication.run(NgShoppingListApplication.class, args);
		
	}
	
	@Bean
	ApplicationRunner init(ProductRepository repo) {
		return data ->{
			Stream.of("camel","Brill","cello",
					"fingerip","PepperSoft")
			.forEach(name->{
				Product prod = new Product();
				prod.setName(name);
				repo.save(prod);
			});
			repo.findAll().forEach(System.out::println);
		};
	}
}
