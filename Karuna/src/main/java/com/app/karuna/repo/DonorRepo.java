package com.app.karuna.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Donor;

public interface DonorRepo extends JpaRepository<Donor, Long> {
			
	Donor findByEmailAndPassword(String email, String password);

	List<Donor> findAllByEmail(String email);

}
