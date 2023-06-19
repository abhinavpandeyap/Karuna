package com.app.karuna.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Item;

public interface ItemRepo extends JpaRepository<Item, Long> {

	List<Item> findByDonorId(Long donorId);

	List<Item> findAllByReceiverId(Long receiverId);

	List<Item> findAllByStatusFalse();

}
