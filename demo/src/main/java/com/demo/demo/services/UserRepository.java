package com.demo.demo.services;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.demo.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
