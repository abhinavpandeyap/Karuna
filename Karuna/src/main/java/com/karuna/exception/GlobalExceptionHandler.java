package com.karuna.exception;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import com.app.karuna.dto.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {


	@ExceptionHandler(MethodArgumentNotValidException.class)
	public  ResponseEntity<?> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
		System.out.println("in global handler : method arg invalid");
		Map<String, String> errorMap = ex.getFieldErrors().stream() 
				.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMap);
	}

	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	public  ResponseEntity<?> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException ex) {
		System.out.println("in global handler : method arg type mismatch " + ex);

		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(
				"Type mismatch for param : " + ex.getName() + " Details : " + ex.getMostSpecificCause().getMessage()));
	}
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
	    System.out.println("err " + e);
	    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	}

	
	@ExceptionHandler(UserAlreadyExistException.class)
	public ResponseEntity<?> handleUserAlreadyExistsException(UserAlreadyExistException e)
	{
		System.out.println("err " + e);
		return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());

	}

	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleException(Exception e) {
		System.out.println("in run time exc handler");
		e.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage()));
	}
}
