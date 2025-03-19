package com.example.service_auth.repository;

import com.example.service_auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User findByEmailAndMatricule(String email, String matricule);
}