package com.zuitt.demo.repositories;

import com.zuitt.demo.models.Products;
import org.springframework.data.repository.CrudRepository;

public interface Products_Repositories extends CrudRepository<Products, Integer> {

}
