package com.zuitt.demo.controllers;
import com.zuitt.demo.models.Categories;
import com.zuitt.demo.models.Products;
import com.zuitt.demo.repositories.Categories_Repositories;
import com.zuitt.demo.repositories.Products_Repositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class Products_Controller {

    @Autowired
    Products_Repositories products_repositories;

    @Autowired
    Categories_Repositories categories_repositories;



    @GetMapping("/")
    public Iterable<Products> getProducts () {
        return products_repositories.findAll();
    }

    @GetMapping("/{id}")
    public Products getProductsById(@PathVariable Integer id){
        return products_repositories.findById(id).get();
    }

    @PostMapping("/{categories_id}")
    public Products addProducts(@RequestBody Products products, @PathVariable Integer categories_id){
        Categories categories =  categories_repositories.findById(categories_id).get();
        products.setCategories(categories);
        return products_repositories.save(products);
    }

    private static String UPLOADED_FOLDER = "src/main/resources/static/images/";
    @PostMapping("/upload/{prod_id}")
    public String singleFileUpload(@PathVariable Integer prod_id, @RequestParam("file") MultipartFile file,
                                   RedirectAttributes redirectAttributes) {

        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "error. no image uploaded.";
        }

        try {
            System.out.println(file.getOriginalFilename());
            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

            Products products = products_repositories.findById(prod_id).get();
            products.setImage(file.getOriginalFilename());
            products_repositories.save(products);

            redirectAttributes.addFlashAttribute("message",
                    "You successfully uploaded '" + file.getOriginalFilename() + "'");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return file.getOriginalFilename();
    }


        @DeleteMapping("/delete/{id}")
        public Integer deleteProduct(@PathVariable Integer id){
            products_repositories.deleteById(id);
            return id;
        }

        @PutMapping("/update/{id}")
        public void updateProduct (@PathVariable Integer id, @RequestBody String name){
            Products products = products_repositories.findById(id).get();
            products.setName(name);
            products_repositories.save(products);
        }



}
