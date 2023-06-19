package com.app.karuna.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper=false)
@Entity
@Table(name="delivery")
public class Delivery extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name="staff_id")
	private Staff staff;
	
	@ManyToOne
	@JoinColumn(name="donor_id")
	private Donor donor;
	
	@ManyToOne
	@JoinColumn(name="receiver_id")
	private Receiver receiver;
	
	@OneToMany(mappedBy = "delivery")
	private List<Item> items=new ArrayList<>();
	
	@Column(name="delivery_date_time")
	private LocalDateTime deliveryDateAndTime;
	
	@Column(name = "status", columnDefinition = "BIT default b'0'")
	private boolean status;
	
	

}
