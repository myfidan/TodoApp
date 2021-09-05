package com.fidan.rest.basic.auth;

public class AuthenticatedBean {
	
	private String msg;
	
	public AuthenticatedBean(String msg) {
		this.msg = msg;
	}

	
	
	public String getMsg() {
		return msg;
	}



	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
	@Override
	public String toString() {
		return "HelloWorldBean [msg=" + msg + "]";
	}
	
	
}
