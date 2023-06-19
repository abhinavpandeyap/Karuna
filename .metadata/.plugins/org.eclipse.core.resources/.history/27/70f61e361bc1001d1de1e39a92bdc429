package com.karuna.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="donor")
public class Donor extends BaseEntity 
{
	@Column(length=100)
	private String name;
	
	@NotBlank(message = "Email can't be blank!")
	@Email(message = "Invalid Email Format")
	@Length(min = 5,max=20,message = "Invalid Email length!!!!!!!")
	private String email;
	private String address;
	
	@Column(length=13)
	private Long phone;
	
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or Invalid Password!!!!")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	
	@Column(name="donation_count")
	private Long donationCount;
	
	@Value("${some.key:false}")
	private Boolean status;
	
	@OneToMany(mappedBy = "donorId",fetch = FetchType.LAZY)
	@JsonBackReference
	private List<Item> items=new ArrayList<Item>();
	
	@ManyToMany(mappedBy = "donors",fetch=FetchType.LAZY)
	@JsonBackReference
	private List<Delivery> deliveries=new ArrayList<Delivery>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getDonationCount() {
		return donationCount;
	}

	public void setDonationCount(Long donationCount) {
		this.donationCount = donationCount;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public List<Delivery> getDeliveries() {
		return deliveries;
	}

	public void setDeliveries(List<Delivery> deliveries) {
		this.deliveries = deliveries;
	}

	public Donor(Long id, String name,
			@NotBlank(message = "Email can't be blank!") @Email(message = "Invalid Email Format") @Length(min = 5, max = 20, message = "Invalid Email length!!!!!!!") String email,
			String address, Long phone,
			@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid Password!!!!") String password,
			Long donationCount, Boolean status, List<Item> items, List<Delivery> deliveries) {
		super(id);
		this.name = name;
		this.email = email;
		this.address = address;
		this.phone = phone;
		this.password = password;
		this.donationCount = donationCount;
		this.status = status;
		this.items = items;
		this.deliveries = deliveries;
	}

	public Donor() {
		super();
	}

	@Override
	public String toString() {
		return "Donor [name=" + name + ", email=" + email + ", address=" + address + ", phone=" + phone + ",donationCount=" + donationCount + ", status=" + status + ", items=" + items
				+ ", deliveries=" + deliveries + "]";
	}
	
	
	
	
	
}
