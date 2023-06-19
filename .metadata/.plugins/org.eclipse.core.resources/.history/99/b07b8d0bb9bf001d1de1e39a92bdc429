package com.karuna.services;

import java.util.List;

import com.karuna.dto.ItemDto;
import com.karuna.dto.LoginDto;
import com.karuna.dto.LogoutDto;
import com.karuna.dto.RegisterDonorDto;
import com.karuna.entity.Campaign;
import com.karuna.entity.Donor;
import com.karuna.entity.Item;
import com.karuna.entity.Receiver;

public interface DonorService {

	Donor registerDonor(RegisterDonorDto donor);
	
	List<Campaign> viewCampaign();
	
	Donor updateDonor(RegisterDonorDto updatedDonor);
	
	Donor login(LoginDto loginDto);
	
	Item donate(ItemDto item);
	
	String logout(Long donorId);
	
	String deleteAccount(Long donorId);
	
	List<Receiver> viewReceivers();

	List<Item> viewHistory(Long donorId);
}
