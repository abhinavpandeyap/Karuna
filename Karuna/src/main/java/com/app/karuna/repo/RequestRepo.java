package com.app.karuna.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Request;

public interface RequestRepo extends JpaRepository<Request, Long> {

}
