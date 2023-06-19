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
import com.app.karuna.entity.Item;
import com.app.karuna.entity.Location;
import com.app.karuna.entity.Payment;
import com.app.karuna.entity.Receiver;
import com.app.karuna.entity.Request;
import com.app.karuna.service.ReceiverService;

@RestController
@CrossOrigin("*")
@RequestMapping("/receiver")
public class ReceiverController {

    @Autowired
    private ReceiverService receiverService;

    @PostMapping("/register")
    public ResponseEntity<?> registerReceiver(@RequestBody Receiver receiver) {
        Receiver registeredReceiver = receiverService.registerReceiver(receiver);
        return new ResponseEntity<>(registeredReceiver, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginReceiver(@RequestBody LoginDTO loginDTO) {
        Receiver loggedInReceiver = receiverService.loginReceiver(loginDTO);
        return new ResponseEntity<>(loggedInReceiver, HttpStatus.OK);
    }

    @PostMapping("/logout/{receiverId}")
    public ResponseEntity<?> logoutReceiver(@PathVariable Long receiverId) {
        boolean loggedOut = receiverService.logoutReceiver(receiverId);
        if (loggedOut) {
            return new ResponseEntity<>("Logged out successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Logout failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{receiverId}")
    public ResponseEntity<?> updateAccount(@PathVariable Long receiverId, @RequestBody Receiver receiver) {
        // Set receiverId on the receiver object
        receiver.setId(receiverId);
        Receiver updatedReceiver = receiverService.updateAcc(receiver);
        return new ResponseEntity<>(updatedReceiver, HttpStatus.OK);
    }

    @DeleteMapping("/{receiverId}")
    public ResponseEntity<?> deleteAccount(@PathVariable Long receiverId) {
        boolean deleted = receiverService.deleteAcc(receiverId);
        if (deleted) {
            return new ResponseEntity<>("Account deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Account deletion failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/items/accept/{receiverId}/{itemId}")
    public ResponseEntity<?> acceptItem(@PathVariable Long receiverId, @PathVariable Long itemId) {
        boolean accepted = receiverService.acceptItem(receiverId,itemId);
        if (accepted) {
            return new ResponseEntity<>("Item accepted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Item acceptance failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/items/request")
    public ResponseEntity<?> requestForItem(@RequestBody Request request) {
        boolean requested = receiverService.requestForItem(request);
        if (requested) {
            return new ResponseEntity<>("Item requested successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Item request failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/delivery/request/{itemId}")
    public ResponseEntity<?> requestForDelivery(@RequestBody Request request,@PathVariable Long itemId) {
        boolean requested = receiverService.requestForDelivery(itemId,request);
        if (requested) {
            return new ResponseEntity<>("Delivery request submitted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Delivery request submission failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/payment/{receiverId}")
    public ResponseEntity<?> makePayment(@PathVariable Long receiverId,@RequestBody Payment payment) {
        String msg=receiverService.makePayment(receiverId,payment);
       
            return new ResponseEntity<>(msg, HttpStatus.OK);
        
    }

    @GetMapping("/history/{receiverId}")
    public ResponseEntity<?> viewHistory(@PathVariable Long receiverId) {
        List<Item> history = receiverService.viewHistory(receiverId);
        return new ResponseEntity<>(history, HttpStatus.OK);
    }

    @GetMapping("/donors/{itemId}/location")
    public ResponseEntity<?> viewLocationOfDonor(@PathVariable Long itemId) {
        Location donorLocation = receiverService.viewLocationOfDonor(itemId);
        return new ResponseEntity<>(donorLocation, HttpStatus.OK);
    }
    
    @GetMapping("/items")
    public ResponseEntity<?> viewItems() {
        List<Item> items = receiverService.viewItems();
        return ResponseEntity.ok(items);
    }

}
