package com.app.karuna.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.karuna.entity.Campaign;

public interface CampaignRepo extends JpaRepository<Campaign, Long> {

}
