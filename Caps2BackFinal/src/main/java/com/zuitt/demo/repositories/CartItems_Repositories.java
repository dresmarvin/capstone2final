package com.zuitt.demo.repositories;

import com.zuitt.demo.models.CartItems;
import org.springframework.data.repository.CrudRepository;

public interface CartItems_Repositories extends CrudRepository<CartItems, Integer> {

}
