package com.zuitt.demo.models;


import javax.persistence.*;

@Entity
@Table(name = "cartitems")
public class CartItems {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private  int id;

        @ManyToOne
        @JoinColumn(name = "users_id" )
        private Users users;

        private String product_name;
        private int product_price;
        private int product_quantity;
        private int product_subtotal;

        private String 	product_status;

    public CartItems(String product_name, int product_price, int product_quantity, int product_subtotal) {
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_quantity = product_quantity;
        this.product_subtotal = product_subtotal;
    }


    public int getId() {
        return id;
    }


    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public int getProduct_price() {
        return product_price;
    }

    public void setProduct_price(int product_price) {
        this.product_price = product_price;
    }

    public int getProduct_quantity() {
        return product_quantity;
    }

    public void setProduct_quantity(int product_quantity) {
        this.product_quantity = product_quantity;
    }

    public int getProduct_subtotal() {
        return product_subtotal;
    }

    public void setProduct_subtotal(int product_subtotal) {
        this.product_subtotal = product_subtotal;
    }

    public String getProduct_status() {
        return product_status;
    }

    public void setProduct_status(String product_status) {
        this.product_status = product_status;
    }
}
