package com.zuitt.demo.controllers;


import com.zuitt.demo.models.Categories;
import com.zuitt.demo.repositories.Categories_Repositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:3000")
public class Categories_Controller {

    @Autowired
    Categories_Repositories categories_repositories;

    @GetMapping("/")
    public Iterable<Categories> getCategories () {
        return categories_repositories.findAll();
    }

    @GetMapping("/{id}")
    public Categories getCategoriesById(@PathVariable Integer id){
        return categories_repositories.findById(id).get();
    }

    @PostMapping("/")
    public Categories addCategories(@RequestBody Categories categories){
        return categories_repositories.save(categories);
    }

}
