package com.example.service_ticket.repository;

import com.example.service_ticket.model.Incident;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IncidentRepository extends JpaRepository<Incident, Long> {
    List<Incident> findByUtilisateurId(String utilisateurId);
}