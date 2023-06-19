package com.app.karuna.service;

import java.util.List;

import com.app.karuna.dto.LoginDTO;
import com.app.karuna.entity.Campaign;
import com.app.karuna.entity.Donor;
import com.app.karuna.entity.Item;
import com.app.karuna.entity.Receiver;

public interface DonorService {
	
	public Donor registerDonor(Donor donor);
	
	public Donor loginDonor(LoginDTO loginDTO);
	
	public boolean logoutDonor(Long donorId);
	
	public Donor updateAcc(Donor donor);
	
	public boolean deleteAcc(Long donorId);
	
	public Item donateToReceiver(Long donorId,Long receiverId,Item item); 
	
	public Item donate(Long donorId,Item item);
	
	public Item donateToCampaign(Long donorId,Long campaignId,Item item);
	
	public List<Item> viewHistory(Long donorId);
	
	public List<Receiver> viewReceivers();

	public List<Campaign> viewCampaigns();
}
