package com.zuitt.demo.controllers;


import com.zuitt.demo.models.CartItems;
import com.zuitt.demo.models.Users;
import com.zuitt.demo.repositories.CartItems_Repositories;
import com.zuitt.demo.repositories.Users_Repositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartItems_Controller {
    @Autowired
    CartItems_Repositories cartItemsRepositories;

    @Autowired
    Users_Repositories usersRepositories;


    @GetMapping("/")
    public Iterable<CartItems> getAllItems(){
        return cartItemsRepositories.findAll();
    }

    @PostMapping("/{users_id}/update")
    public CartItems addToCart(@RequestBody CartItems cartItems, @PathVariable Integer users_id ){
        Users users = usersRepositories.findById(users_id).get();
        cartItems.setUsers(users);
        return cartItemsRepositories.save(cartItems);
    }

}
