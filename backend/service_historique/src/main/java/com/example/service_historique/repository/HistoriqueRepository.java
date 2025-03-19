package com.example.service_historique.repository;

import com.example.service_historique.model.Historique;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HistoriqueRepository extends JpaRepository<Historique, Long> {
    List<Historique> findByMatriculeUtilisateur(String matriculeUtilisateur);
}