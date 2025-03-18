package com.example.service_auth.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import java.time.LocalDateTime;

@Entity
@Table(name = "compte_utilisateur")
public class User {

    @Id
    private Integer id; // Clé primaire : id

    private String matricule;

    @Column(name = "nom_utilisateur")
    private String nomUtilisateur;

    private String motdepasse;

    private String role;

    @Column(name = "date_creation")
    private LocalDateTime dateCreation;

    // Constructeur par défaut requis par JPA
    public User() {}

    // Getters et Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getMatricule() { return matricule; }
    public void setMatricule(String matricule) { this.matricule = matricule; }

    public String getNomUtilisateur() { return nomUtilisateur; }
    public void setNomUtilisateur(String nomUtilisateur) { this.nomUtilisateur = nomUtilisateur; }

    public String getMotdepasse() { return motdepasse; }
    public void setMotdepasse(String motdepasse) { this.motdepasse = motdepasse; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public LocalDateTime getDateCreation() { return dateCreation; }
    public void setDateCreation(LocalDateTime dateCreation) { this.dateCreation = dateCreation; }
}