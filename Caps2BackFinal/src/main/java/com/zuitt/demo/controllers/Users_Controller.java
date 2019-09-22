package com.zuitt.demo.controllers;
import com.zuitt.demo.models.Users;
import com.zuitt.demo.repositories.Users_Repositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class Users_Controller {
    @Autowired
    Users_Repositories users_repositories;

    @PostMapping("/register")
    public Users registerUser(@RequestBody Users user) {
        String hashedpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedpw);
        return users_repositories.save(user);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody Users users) {
        Users foundUser = users_repositories.findByUsername(users.getUsername());
        if(foundUser != null && BCrypt.checkpw(users.getPassword(), foundUser.getPassword())) {
            return foundUser;
        }
        return null;
    }


    @PostMapping("/IsRegistered")
    public boolean checkUser(@RequestBody Users users){
        Users foundUsers = users_repositories.findByUsername(users.getUsername());
        if(foundUsers != null){
            return true;
        }
            return false;
    }
}
