package com.example.service_auth.repository;

import com.example.service_auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE UPPER(u.matricule) = UPPER(:matricule)")
    User findByMatricule(String matricule);
}