package com.app.karuna.dto;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.app.karuna.entity.Item;
import com.app.karuna.entity.Location;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class LoginDTO {
	
	@NotBlank(message = "Email can't be blank!")
	@Email(message = "Invalid Email Format")
	@Length(min = 5,max=20,message = "Invalid Email length!!!!!!!")
	private String email;
	
	
	@NotBlank(message = "Password can't be blank!")
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or Invalid Password!!!!")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;

}
