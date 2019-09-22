package com.zuitt.demo.models;


import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "order_details")
public class OrderDetail {
        @Id @GeneratedValue (strategy = GenerationType.IDENTITY)
        private int id;
        private int quantity;

        @ManyToOne
        @JoinColumn(name = "product_id")
        private Products orderDetailProduct;

        @ManyToOne
        @JoinColumn(name = "order_id")
        private Order orderDetailOrder;

//        @ManyToOne
//        @JoinColumn(name = "users_id")
//        private Users orderDetailUser;


        private String status;

        private LocalDateTime confirm_date;



    public OrderDetail() {
    }

    public OrderDetail(int quantity) {
        this.quantity = quantity;
    }


    public int getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Products getOrderDetailProduct() {
        return orderDetailProduct;
    }

    public void setOrderDetailProduct(Products orderDetailProduct) {
        this.orderDetailProduct = orderDetailProduct;
    }

    public Order getOrderDetailOrder() {
        return orderDetailOrder;
    }

    public void setOrderDetailOrder(Order orderDetailOrder) {
        this.orderDetailOrder = orderDetailOrder;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getConfirm_date() {
        return confirm_date;
    }

    public void setConfirm_date(LocalDateTime confirm_date) {
        this.confirm_date = confirm_date;
    }

//    public Users getOrderDetailUser() {
//        return orderDetailUser;
//    }
//
//    public void setOrderDetailUser(Users orderDetailUser) {
//        this.orderDetailUser = orderDetailUser;
//    }
}
