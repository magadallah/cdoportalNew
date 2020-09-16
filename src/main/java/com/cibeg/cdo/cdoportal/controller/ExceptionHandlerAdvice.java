package com.cibeg.cdo.cdoportal.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ExceptionHandlerAdvice {
	
	static Logger log = Logger.getLogger(ExceptionHandlerAdvice.class);
	
	@ExceptionHandler(value =  Throwable.class)
	public ResponseMsg handleNotFoundException(Throwable ex) {
		log.error("Unexpected error : " + ex.getMessage());
		ResponseMsg responseMsg = new ResponseMsg("An unexpected internal server error occured");
		return responseMsg;
	}

}

