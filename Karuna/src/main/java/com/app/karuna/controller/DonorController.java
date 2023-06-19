package com.app.karuna.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.app.karuna.dto.LoginDTO;
import com.app.karuna.entity.Campaign;
import com.app.karuna.entity.Donor;
import com.app.karuna.entity.Item;
import com.app.karuna.entity.Receiver;
import com.app.karuna.service.DonorService;


@RestController
@CrossOrigin("*")
@RequestMapping("/donor")
public class DonorController {

    @Autowired
    private DonorService donorService;

    @PostMapping("/register")
    public ResponseEntity<?> registerDonor(@RequestBody Donor donor) {
        Donor registeredDonor = donorService.registerDonor(donor);
        return new ResponseEntity<>(registeredDonor, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginDonor(@RequestBody LoginDTO loginDTO) {
        Donor loggedInDonor = donorService.loginDonor(loginDTO);
        return new ResponseEntity<>(loggedInDonor, HttpStatus.OK);
    }

    @PostMapping("/logout/{donorId}")
    public ResponseEntity<?> logoutDonor(@PathVariable Long donorId) {
        boolean loggedOut = donorService.logoutDonor(donorId);
        if (loggedOut) {
            return new ResponseEntity<>("Logged out successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Logout failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{donorId}")
    public ResponseEntity<?> updateAccount(@PathVariable Long donorId, @RequestBody Donor donor) {
        donor.setId(donorId);
        Donor updatedDonor = donorService.updateAcc(donor);
        return new ResponseEntity<>(updatedDonor, HttpStatus.OK);
    }

    @DeleteMapping("/{donorId}")
    public ResponseEntity<?> deleteAccount(@PathVariable Long donorId) {
        boolean deleted = donorService.deleteAcc(donorId);
        if (deleted) {
            return new ResponseEntity<>("Account deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Account deletion failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    @PostMapping("/donate/receiver/{receiverId}/donor/{donorId}")
    public ResponseEntity<Item> donateToReceiver(
            @PathVariable Long receiverId,
            @PathVariable Long donorId,
            @RequestBody Item item) {
        Item newItem = donorService.donateToReceiver(donorId, receiverId, item);
        return ResponseEntity.ok(newItem);
    }

    @PostMapping("/donate/donor/{donorId}")
    public ResponseEntity<Item> donate(
            @PathVariable Long donorId,
            @RequestBody Item item) {
        Item newItem = donorService.donate(donorId, item);
        return ResponseEntity.status(HttpStatus.CREATED).body(newItem);
    }

    @PostMapping("/donate/campaign/{campaignId}/donor/{donorId}")
    public ResponseEntity<Item> donateToCampaign(
            @PathVariable Long campaignId,
            @PathVariable Long donorId,
            @RequestBody Item item) {
        Item newItem = donorService.donateToCampaign(donorId, campaignId, item);
        return ResponseEntity.status(HttpStatus.CREATED).body(newItem);
    }

    @GetMapping("/history/{donorId}")
    public ResponseEntity<?> viewHistory(@PathVariable Long donorId) {
        List<Item> history = donorService.viewHistory(donorId);
        return new ResponseEntity<>(history, HttpStatus.OK);
    }

    @GetMapping("/receivers")
    public ResponseEntity<?> viewReceivers() {
        List<Receiver> receivers = donorService.viewReceivers();
        return new ResponseEntity<>(receivers, HttpStatus.OK);
    }

    @GetMapping("/campaigns")
    public ResponseEntity<?> viewCampaigns() {
        List<Campaign> campaigns = donorService.viewCampaigns();
        return new ResponseEntity<>(campaigns, HttpStatus.OK);
    }
}
