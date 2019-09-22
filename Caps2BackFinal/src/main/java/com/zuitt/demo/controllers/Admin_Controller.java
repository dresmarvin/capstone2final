package com.zuitt.demo.controllers;


import com.zuitt.demo.models.Admin;
import com.zuitt.demo.repositories.Admin_Repositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class Admin_Controller {

    @Autowired
    Admin_Repositories admin_repositories;

    @PostMapping("/register")
    public Admin registerAdmin (@RequestBody Admin admin){
        String hashedpw = BCrypt.hashpw(admin.getPassword(), BCrypt.gensalt());
        admin.setPassword(hashedpw);
        return admin_repositories.save(admin);
    }


    @PostMapping("/login")
    public Admin adminLogin (@RequestBody Admin admin){
        Admin findAdmin = admin_repositories.findByUsername(admin.getUsername());
        if (findAdmin != null && admin.getPassword().equals(findAdmin.getPassword())) {
            return findAdmin;
        }
        return null;
    }


}
