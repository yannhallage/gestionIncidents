package com.example.service_auth.controller;

import com.example.service_auth.model.User;
import com.example.service_auth.service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        System.out.println("Requête reçue : " + loginRequest.toString());
        User user = userService.authenticate(loginRequest.getEmail(), loginRequest.getMatricule(), loginRequest.getMotdepasse());
        if (user != null) {
            // Cookie pour le rôle
            Cookie roleCookie = new Cookie("userRole", user.getRole());
            roleCookie.setPath("/"); // Accessible à toutes les routes
            roleCookie.setMaxAge(24 * 60 * 60); // 24 heures
            response.addCookie(roleCookie);

            // Cookie pour le matricule
            Cookie matriculeCookie = new Cookie("matricule", user.getMatricule());
            matriculeCookie.setPath("/");
            matriculeCookie.setMaxAge(24 * 60 * 60); // 24 heures
            response.addCookie(matriculeCookie);

            return ResponseEntity.ok(new LoginResponse("Connexion réussie !", user.getRole()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email, matricule ou mot de passe incorrect");
        }
    }

    // Endpoint pour vérifier la session (optionnel)
    @GetMapping("/session")
    public ResponseEntity<?> checkSession(@CookieValue(value = "userRole", defaultValue = "") String userRole) {
        if (!userRole.isEmpty()) {
            return ResponseEntity.ok("Session active, rôle : " + userRole);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Aucune session active");
        }
    }
}

class LoginRequest {
    private String email;
    private String matricule;
    private String motdepasse;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getMatricule() { return matricule; }
    public void setMatricule(String matricule) { this.matricule = matricule; }
    public String getMotdepasse() { return motdepasse; }
    public void setMotdepasse(String motdepasse) { this.motdepasse = motdepasse; }

    @Override
    public String toString() {
        return "LoginRequest{email='" + email + "', matricule='" + matricule + "', motdepasse='[masqué]'}";
    }
}

class LoginResponse {
    private String message;
    private String role;

    public LoginResponse(String message, String role) {
        this.message = message;
        this.role = role;
    }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
}