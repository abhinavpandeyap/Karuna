package com.app.karuna.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

}
