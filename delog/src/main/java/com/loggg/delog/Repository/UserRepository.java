package com.loggg.delog.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loggg.delog.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
