package com.app.karuna.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Staff;

public interface StaffRepo extends JpaRepository<Staff, Long> {

}
