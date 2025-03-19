package com.example.service_auth.service;

import com.example.service_auth.model.User;
import com.example.service_auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User authenticate(String email, String matricule, String motdepasse) {
        User user = userRepository.findByEmailAndMatricule(email, matricule);
        if (user != null && user.getMotdepasse().equals(motdepasse)) {
            return user;
        }
        return null;
    }
}