package com.karuna.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.karuna.entity.BaseEntity;
import com.karuna.entity.Category;

public class ItemDto extends BaseEntity{
	
	@Enumerated(EnumType.STRING)
	private Category category;
	
	private Long quantity;

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public ItemDto(Long id, Category category, Long quantity) {
		super(id);
		this.category = category;
		this.quantity = quantity;
	}

	public ItemDto() {
		super();
	}

	@Override
	public String toString() {
		return "ItemDto [category=" + category + ", quantity=" + quantity + "]";
	}
	
	
	
}
