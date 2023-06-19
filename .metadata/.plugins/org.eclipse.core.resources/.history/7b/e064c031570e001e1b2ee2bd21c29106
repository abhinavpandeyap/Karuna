package com.app.karuna.entity;

import javax.persistence.Embeddable;
import javax.validation.constraints.AssertTrue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Embeddable
public class Location {

	
	
	    private double latitude;
	    
	    private double longitude;
	    
	    @AssertTrue(message = "Location must be within India")
	    public boolean isWithinIndia() {
	        // Check if latitude and longitude fall within India's boundaries
	        // Implement your validation logic here
	        double minLatitude = 6.755, maxLatitude = 35.495;
	        double minLongitude = 68.7, maxLongitude = 97.395;

	        return latitude >= minLatitude && latitude <= maxLatitude &&
	               longitude >= minLongitude && longitude <= maxLongitude;
	    }


}
