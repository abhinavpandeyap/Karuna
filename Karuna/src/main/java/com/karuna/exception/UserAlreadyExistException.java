package com.karuna.exception;

@SuppressWarnings("serial")
public class UserAlreadyExistException extends RuntimeException {

	public UserAlreadyExistException(String message) {
		super(message);
	}

}
