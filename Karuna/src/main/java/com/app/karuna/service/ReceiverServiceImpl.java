package com.app.karuna.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.karuna.dto.LoginDTO;
import com.app.karuna.entity.Item;
import com.app.karuna.entity.Location;
import com.app.karuna.entity.Payment;
import com.app.karuna.entity.Receiver;
import com.app.karuna.entity.Request;
import com.app.karuna.repo.DonorRepo;
import com.app.karuna.repo.ItemRepo;
import com.app.karuna.repo.PaymentRepo;
import com.app.karuna.repo.ReceiverRepo;
import com.app.karuna.repo.RequestRepo;
import com.karuna.exception.ResourceNotFoundException;
import com.karuna.exception.UserAlreadyExistException;

@Service
@Transactional
public class ReceiverServiceImpl implements ReceiverService {

	@Autowired
	private ReceiverRepo receiverRepo;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private ItemRepo itemRepo;
	
	@Autowired
	private RequestRepo requestRepo;
	
	@Autowired
	private PaymentRepo paymentRepo;
	
	

	@Override
	public Receiver registerReceiver(Receiver receiver) {
		 List<Receiver> existingReceivers = receiverRepo.findAllByEmail(receiver.getEmail());
		    if (!existingReceivers.isEmpty()) {
		        throw new UserAlreadyExistException("Email Id is Already Registered!!!");
		    }
		    return receiverRepo.save(receiver);
	}

	@Override
	public Receiver loginReceiver(LoginDTO loginDTO) {
		Receiver receiver = receiverRepo.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
		if (receiver == null) {
			throw new ResourceNotFoundException("Bad Credentials !!!!!");
		}
		receiver.setStatus(true);
		return mapper.map(receiver, Receiver.class);

	}

	@Override
	public boolean logoutReceiver(Long receiverId) {
		Optional<Receiver> receiverOptional = receiverRepo.findById(receiverId);
		if (receiverOptional.isPresent()) {
			Receiver receiver = receiverOptional.get();
			receiver.setStatus(false);
			receiverRepo.save(receiver);
			return true;
		}
		return false;
	}

	@Override
	public Receiver updateAcc(Receiver receiver) {
		Optional<Receiver> receiverOptional = receiverRepo.findById(receiver.getId());
		if (receiverOptional.isPresent()) {
			Receiver existingReceiver = receiverOptional.get();
			existingReceiver.setName(receiver.getName());
			existingReceiver.setEmail(receiver.getEmail());
			existingReceiver.setPassword(receiver.getPassword());
			existingReceiver.setPhone(receiver.getPhone());
			existingReceiver.setAddress(receiver.getAddress());
			existingReceiver.setLocation(receiver.getLocation());
			
			Receiver updatedReceiver=receiverRepo.save(existingReceiver);
			updatedReceiver.setStatus(true);
		}

		throw new ResourceNotFoundException("Receiver not found with ID: " + receiver.getId());
	}

	@Override
	public boolean deleteAcc(Long receiverId) {
		Optional<Receiver> receiverOptional = receiverRepo.findById(receiverId);
		if (receiverOptional.isPresent()) {
			receiverRepo.deleteById(receiverId);
			return true;
		}
		throw new ResourceNotFoundException("Receiver not found with ID: " + receiverId);
	}


	@Override
	public boolean acceptItem(Long receiverId,Long ietmId) {
		itemRepo.getReferenceById(ietmId).setStatus(true);
		itemRepo.getReferenceById(ietmId).setAcceptedDateTime(LocalDateTime.now());
		itemRepo.getReferenceById(ietmId).setReceiver(receiverRepo.getReferenceById(receiverId));
		return true;
	}

	@Override
	public boolean requestForItem(Request request) {
		requestRepo.save(request);
		return true;
		
	}

	@Override
	public boolean requestForDelivery(Long itemId,Request request) {
		Request savedRequest=requestRepo.save(request);
		savedRequest.setItem(itemRepo.getReferenceById(itemId));
		return true;
		
	}

	@Override
	public String makePayment(Long senderId,Payment payment) {
		
		Payment savedPayment =paymentRepo.save(payment);
		savedPayment.setReceiver(receiverRepo.getReferenceById(senderId));
		return "Payment Successfull !!!\n";
	}

	@Override
	public List<Item> viewHistory(Long receiverId) {
		return itemRepo.findAllByReceiverId(receiverId);
	}

	@Override
	public Location viewLocationOfDonor(Long itemId) {
		return itemRepo.getReferenceById(itemId).getDonor().getLocation();
		
	}

	@Override
	public List<Item> viewItems() {
	    return itemRepo.findAllByStatusFalse();
	}

	@Override
	public List<Item> acceptedItems(Long receiverId) {
		return itemRepo.findAllByReceiverId(receiverId);
		
		
	}


}
