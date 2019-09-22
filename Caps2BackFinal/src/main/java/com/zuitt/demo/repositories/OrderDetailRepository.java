package com.zuitt.demo.repositories;

import com.zuitt.demo.models.OrderDetail;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderDetailRepository extends CrudRepository<OrderDetail, Integer> {
    List<OrderDetail> findByStatus(String status);
}
