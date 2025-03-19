package com.example.service_historique.model;

import jakarta.persistence.*; // Remplacez javax.persistence par jakarta.persistence
import lombok.Data;

@Entity
@Table(name = "historique")
@Data
public class Historique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String message;

    @Column(nullable = false)
    private String matriculeUtilisateur;

    @Column(nullable = false)
    private boolean conclu;

    @Column(nullable = false)
    private String typePanne;

    @Column(nullable = false)
    private String matriculeTechnicien;

    @Column(nullable = false)
    private String dateCreation;
}