package com.testlab.springboot.repositories;

import com.testlab.springboot.entities.Product;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
