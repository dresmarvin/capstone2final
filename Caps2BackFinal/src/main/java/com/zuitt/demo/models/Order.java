package com.zuitt.demo.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Date date;

    @ManyToOne
    @JoinColumn(name = "users_id")
    @JsonIgnore
    private Users orderUser;

    @OneToMany(mappedBy = "orderDetailOrder", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<OrderDetail> orderDetails;


    public Order() {
    }

    public Order(Date date) {
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Users getOrderUser() {
        return orderUser;
    }

    public void setOrderUser(Users orderUser) {
        this.orderUser = orderUser;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }
}
