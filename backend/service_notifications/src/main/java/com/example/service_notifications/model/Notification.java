package com.example.service_notifications.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @JsonProperty("message") // Assure que "message" dans le JSON mappe à cette propriété
    private String message;

    @Column(nullable = false)
    @JsonProperty("matricule") // Assure que "matricule" dans le JSON mappe à cette propriété
    private String matricule;

    // Constructeurs
    public Notification() {}
    public Notification(Long id, String message, String matricule) {
        this.id = id;
        this.message = message;
        this.matricule = matricule;
    }

    // Getters et setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getMatricule() { return matricule; }
    public void setMatricule(String matricule) { this.matricule = matricule; }

    @Override
    public String toString() {
        return "Notification{id=" + id + ", message='" + message + "', matricule='" + matricule + "'}";
    }
}