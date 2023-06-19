package com.app.karuna.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Delivery;

public interface DeliveryRepo extends JpaRepository<Delivery, Long> {

}
