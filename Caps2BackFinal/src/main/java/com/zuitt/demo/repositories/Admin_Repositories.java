package com.zuitt.demo.repositories;

import com.zuitt.demo.models.Admin;
import org.springframework.data.repository.CrudRepository;

public interface Admin_Repositories extends CrudRepository<Admin, Integer> {
    Admin findByUsername(String name);
}
