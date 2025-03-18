package com.example.service_auth.service;

import com.example.service_auth.model.User;
import com.example.service_auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String matricule, String motdepasse, String role) {
        User user = userRepository.findByMatricule(matricule);

        if (user == null) {
            System.out.println("Utilisateur non trouvé pour le matricule : " + matricule);
            return false;
        }

        System.out.println("Utilisateur trouvé : Matricule = " + user.getMatricule());
        System.out.println("Mot de passe récupéré : " + user.getMotdepasse());
        System.out.println("Rôle récupéré : " + user.getRole());

        boolean isPasswordValid = user.getMotdepasse().equals(motdepasse);
        boolean isRoleValid = user.getRole().equals(role);

        System.out.println("Mot de passe valide : " + isPasswordValid);
        System.out.println("Rôle valide : " + isRoleValid);

        return isPasswordValid && isRoleValid;
    }
}