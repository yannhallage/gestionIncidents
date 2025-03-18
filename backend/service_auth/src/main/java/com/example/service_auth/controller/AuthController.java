package com.example.service_auth.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.service_auth.service.UserService;
import com.example.service_auth.dto.UserLoginRequest;
import com.example.service_auth.dto.MessageResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest loginRequest) {
        logger.info("Tentative de connexion pour l'utilisateur : " + loginRequest.getMatricule());

        // Vérification avec la méthode authenticate
        boolean isAuthenticated = userService.authenticate(
                loginRequest.getMatricule(),
                loginRequest.getMotdepasse(),
                loginRequest.getRole()
        );

        if (!isAuthenticated) {
            logger.warn("Échec de l'authentification pour l'utilisateur : " + loginRequest.getMatricule());
            return ResponseEntity.status(401).body(new MessageResponse("Matricule, mot de passe ou rôle incorrect"));
        }

        // Authentification réussie
        logger.info("Connexion réussie pour l'utilisateur : " + loginRequest.getMatricule());
        return ResponseEntity.ok(new MessageResponse("Connexion réussie !"));
    }
}