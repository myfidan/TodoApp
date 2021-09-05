package com.fidan.rest.webervices.demo.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	
	@RequestMapping(method=RequestMethod.GET,path="hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	@RequestMapping(method=RequestMethod.GET,path="hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello worlllld");
	}
	
	@RequestMapping(method=RequestMethod.GET,path="hello-world-bean-err")
	public HelloWorldBean helloWorldBeanErr() {
		throw new RuntimeException("Something went wrong");
	}
	

	@RequestMapping(method=RequestMethod.GET,path="hello-world-bean/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean("Hello world "+ name);
	}
}
