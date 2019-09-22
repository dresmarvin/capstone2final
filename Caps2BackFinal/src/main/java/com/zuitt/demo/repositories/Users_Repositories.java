package com.zuitt.demo.repositories;

import com.zuitt.demo.models.Users;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface Users_Repositories extends CrudRepository<Users, Integer> {
    Users findByUsername(String username);

}
