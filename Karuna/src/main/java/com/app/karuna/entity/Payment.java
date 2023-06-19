package com.app.karuna.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table
public class Payment extends BaseEntity {

	private Double ammount;
	
	private String message;
	
	@ManyToOne
	@JoinColumn(name="sender")
	private Receiver receiver;
	
	@Column(name = "status", columnDefinition = "BIT default b'0'")
	private boolean status;
}
