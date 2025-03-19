package com.example.service_ticket.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "incident")
public class Incident {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_creation")
    private LocalDateTime dateCreation;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String lieu;

    @Column(nullable = false)
    private String priorite;

    @Column(nullable = false)
    private String statut;

    @Column(nullable = false)
    private String type;

    @Column(name = "utilisateur_id", nullable = false)
    private String utilisateurId;

    // Getters et setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public LocalDateTime getDateCreation() { return dateCreation; }
    public void setDateCreation(LocalDateTime dateCreation) { this.dateCreation = dateCreation; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getLieu() { return lieu; }
    public void setLieu(String lieu) { this.lieu = lieu; }
    public String getPriorite() { return priorite; }
    public void setPriorite(String priorite) { this.priorite = priorite; }
    public String getStatut() { return statut; }
    public void setStatut(String statut) { this.statut = statut; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getUtilisateurId() { return utilisateurId; }
    public void setUtilisateurId(String utilisateurId) { this.utilisateurId = utilisateurId; }

    @Override
    public String toString() {
        return "Incident{id=" + id + ", dateCreation=" + dateCreation + ", description='" + description + "', lieu='" + lieu + "', priorite='" + priorite + "', statut='" + statut + "', type='" + type + "', utilisateurId='" + utilisateurId + "'}";
    }
}