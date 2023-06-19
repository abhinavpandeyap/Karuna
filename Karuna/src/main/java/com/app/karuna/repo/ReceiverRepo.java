package com.app.karuna.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Receiver;

public interface ReceiverRepo extends JpaRepository<Receiver, Long> {

	Receiver findByEmailAndPassword(String email, String password);

	List<Receiver> findAllByEmail(String email);

}
