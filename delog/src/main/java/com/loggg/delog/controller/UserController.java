package com.loggg.delog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.loggg.delog.Repository.UserRepository;
import com.loggg.delog.model.User;

@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
@RestController
public class UserController {

	@Autowired
	private UserRepository us;
//	userRepository us = new UserRepo

	
	@PostMapping("/adduser")
	public User adduser(@RequestBody User u) {
		return us.save(u);
	}
	
	@GetMapping("/getuser")
	public List<User> getuser(){
		return us.findAll();
	}
	
//	@DeleteMapping("/")
//	public 
//	@putMapping("/updateuser")
//	public
}
