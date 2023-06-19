package com.karuna.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.karuna.dto.AddCampaignDto;
import com.karuna.dto.LoginDto;
import com.karuna.dto.RegisterStaffDto;
import com.karuna.services.AdminService;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDto loginDto){
		return ResponseEntity.ok(adminService.login(loginDto));
	}
	
	@GetMapping("/{staffId}")
	public ResponseEntity<?> logout(@RequestBody Long staffId){
		return ResponseEntity.ok(adminService.logout(staffId));
	}
	
	@GetMapping("/staffs")
	public ResponseEntity<?> viewStaffs(){
		return ResponseEntity.ok(adminService.viewStaffs());
	}
	
	@GetMapping("/requests")
	public ResponseEntity<?> viewRequests(){
		return ResponseEntity.ok(adminService.viewRequests());
	}
	
	@PostMapping("/campaign")
	public ResponseEntity<?> addCampaign(@RequestBody AddCampaignDto campaign){
		return ResponseEntity.ok(adminService.addCampaign(campaign));
	}
	
	@PutMapping("/campaign")
	public ResponseEntity<?> updateCampaign(@RequestBody AddCampaignDto campaign){
		return ResponseEntity.ok(adminService.updateCampaign(campaign));
	}
	
	@DeleteMapping("/{campaignId}")
	public ResponseEntity<?> deleteCampaign(@PathVariable Long campaignId){
		return ResponseEntity.ok(adminService.deleteCampaign(campaignId));
	}
	
	@DeleteMapping("/{donorId}")
	public ResponseEntity<?> deleteDonor(@PathVariable Long donorId){
		return ResponseEntity.ok(adminService.removeDonor(donorId));
	}
	
	@DeleteMapping("/{receiverId}")
	public ResponseEntity<?> deleteReceiver(@PathVariable Long receiverId){
		return ResponseEntity.ok(adminService.removeReceiver(receiverId));
	}
	
	@PostMapping("/staff")
	public ResponseEntity<?> addStaff(@RequestBody RegisterStaffDto staff){
		return ResponseEntity.ok(adminService.addStaff(staff));
	}
	
	@PutMapping("/staff")
	public ResponseEntity<?> updateStaff(@RequestBody RegisterStaffDto staff){
		return ResponseEntity.ok(adminService.updateStaff(staff));
	}
	
	@DeleteMapping("/{staffId}")
	public ResponseEntity<?> deleteStaff(@PathVariable Long staffId){
		return ResponseEntity.ok(adminService.deleteStaff(staffId));
	}
	
	@GetMapping("/donor_location/{donorId}")
	public ResponseEntity<?> viewDonorLocation(@PathVariable Long donorId){
		return ResponseEntity.ok(adminService.viewLocationOfDonor(donorId));
	}
	
	@GetMapping("/receiver_location/{receiverId}")
	public ResponseEntity<?> viewReceiverLocation(@PathVariable Long receiverId){
		return ResponseEntity.ok(adminService.viewLocationOfReceiver(receiverId));
	}
	
	@GetMapping("/payment_status/{paymentId}")
	public ResponseEntity<?> checkPaymentStatus(@PathVariable Long paymentId){
		return ResponseEntity.ok(adminService.checkPaymentStatus(paymentId));
	}
	
	
	

}
