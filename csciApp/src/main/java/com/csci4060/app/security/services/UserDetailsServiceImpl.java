package com.csci4060.app.security.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.csci4060.app.model.User;
import com.csci4060.app.repository.UserRepository;

/*
 *  UserDetailsServiceImpl implements UserDetailsService and overrides loadUserByUsername() method.
 *  loadUserByUsername method finds a record from users database tables to build a UserDetails object
 *  for authentication.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	UserRepository userRepo;
	
	@Override
	@Transactional
	//UserPrinciple implements UserDetails so returning UserPrinciple doesn't cause any problems
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepo.findByUsername(username).orElseThrow(
				()->new UsernameNotFoundException("User not found with -> username or emai: "+username)
		);
		
		return UserPrinciple.build(user);
	}

}
