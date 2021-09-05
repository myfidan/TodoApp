package com.fidan.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	
	
	
	@RequestMapping(method=RequestMethod.GET,path="basicauth")
	public AuthenticatedBean helloWorldBean() {
		return new AuthenticatedBean("You authenticated");
	}
	
	
}
