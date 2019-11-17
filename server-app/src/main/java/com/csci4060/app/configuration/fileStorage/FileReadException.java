package com.csci4060.app.configuration.fileStorage;

public class FileReadException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	public FileReadException(String message) {
		super(message);
	}
	
	public FileReadException(String message, Throwable cause) {
		super(message,cause);
	}
}
