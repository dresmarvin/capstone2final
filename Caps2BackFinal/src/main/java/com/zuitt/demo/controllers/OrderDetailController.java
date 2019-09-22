package com.zuitt.demo.controllers;


import com.zuitt.demo.models.Order;
import com.zuitt.demo.models.OrderDetail;
import com.zuitt.demo.models.Products;
import com.zuitt.demo.models.Users;
import com.zuitt.demo.repositories.OrderDetailRepository;
import com.zuitt.demo.repositories.OrderRepository;
import com.zuitt.demo.repositories.Products_Repositories;
import com.zuitt.demo.repositories.Users_Repositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin
public class OrderDetailController {
    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Autowired
    Products_Repositories productsRepositories;

    @Autowired
    OrderRepository orderRepository;

//    @Autowired
//    Users_Repositories users_repositories;

    @PostMapping("/{order_id}/{product_id}")
    public OrderDetail createOrderDetail(
            @RequestBody OrderDetail orderDetail,
            @PathVariable Integer order_id,
            @PathVariable Integer product_id

    ) {
        Order order = orderRepository.findById(order_id).get();
        orderDetail.setOrderDetailOrder(order);
        Products product = productsRepositories.findById(product_id).get();
        orderDetail.setOrderDetailProduct(product);


        orderDetail.setStatus("Pending");
        return orderDetailRepository.save(orderDetail);
    }

    @GetMapping("/")
    public Iterable<OrderDetail> getOrderDetails() {
        return orderDetailRepository.findAll();
    }



    @PutMapping("setstatus/{orderDetailId}/accepted")
    public OrderDetail changetoAccepted(@PathVariable Integer orderDetailId ){
         OrderDetail orderDetail= orderDetailRepository.findById(orderDetailId).get();
         orderDetail.setConfirm_date(LocalDateTime.now());
         orderDetail.setStatus("Accepted");
         return orderDetailRepository.save(orderDetail);
    }


    @PutMapping("setstatus/{orderDetailId}/declined")
    public OrderDetail changetoDeclined(@PathVariable Integer orderDetailId ){
        OrderDetail orderDetail= orderDetailRepository.findById(orderDetailId).get();
        orderDetail.setConfirm_date(LocalDateTime.now());
        orderDetail.setStatus("Declined");
        return orderDetailRepository.save(orderDetail);
    }


}
