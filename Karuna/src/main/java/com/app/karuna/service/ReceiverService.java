package com.app.karuna.service;

import java.util.List;

import com.app.karuna.dto.LoginDTO;
import com.app.karuna.entity.Item;
import com.app.karuna.entity.Location;
import com.app.karuna.entity.Payment;
import com.app.karuna.entity.Receiver;
import com.app.karuna.entity.Request;

public interface ReceiverService {
	
    public Receiver registerReceiver(Receiver receiver);
	
	public Receiver loginReceiver(LoginDTO loginDTO);
	
	public boolean logoutReceiver(Long receiverId);
	
	public Receiver updateAcc(Receiver receiver);
	
	public boolean deleteAcc(Long receiverId);
	
	public List<Item> viewItems();
	
	public boolean acceptItem(Long receiverId,Long ietmId);
	
	public boolean requestForItem(Request request);
	
	public boolean requestForDelivery(Long itemId,Request request);
	
	public String makePayment(Long senderId,Payment payment);
	
	public List<Item> viewHistory(Long receiverId);
	
	public Location viewLocationOfDonor(Long itemId);
	
	public List<Item> acceptedItems(Long receiverId);
	

}
