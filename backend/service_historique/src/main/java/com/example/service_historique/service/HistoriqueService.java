package com.example.service_historique.service;

import com.example.service_historique.model.Historique;
import com.example.service_historique.repository.HistoriqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class HistoriqueService {

    @Autowired
    private HistoriqueRepository historiqueRepository;

    public List<Historique> getHistorique(String matriculeUtilisateur) {
        return historiqueRepository.findByMatriculeUtilisateur(matriculeUtilisateur);
    }

    public Historique addHistorique(Historique historique) {
        // Définir dateCreation si elle n'est pas fournie
        if (historique.getDateCreation() == null || historique.getDateCreation().isEmpty()) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            historique.setDateCreation(LocalDateTime.now().format(formatter));
        }
        return historiqueRepository.save(historique);
    }

    public Historique updateHistorique(Long id, Historique historiqueDetails, String matriculeUtilisateur) {
        Historique historique = historiqueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Historique non trouvé"));

        // Vérifie que l'historique appartient bien à cet utilisateur
        if (!historique.getMatriculeUtilisateur().equals(matriculeUtilisateur)) {
            throw new RuntimeException("Cet historique n'appartient pas à cet utilisateur");
        }

        historique.setMessage(historiqueDetails.getMessage());
        historique.setConclu(historiqueDetails.isConclu());
        historique.setTypePanne(historiqueDetails.getTypePanne());
        historique.setMatriculeTechnicien(historiqueDetails.getMatriculeTechnicien());

        // Mettre à jour dateCreation si fourni dans historiqueDetails
        if (historiqueDetails.getDateCreation() != null && !historiqueDetails.getDateCreation().isEmpty()) {
            historique.setDateCreation(historiqueDetails.getDateCreation());
        }

        return historiqueRepository.save(historique);
    }

    public void deleteHistorique(Long id, String matriculeUtilisateur) {
        Historique historique = historiqueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Historique non trouvé"));

        // Vérifie que l'historique appartient bien à cet utilisateur
        if (!historique.getMatriculeUtilisateur().equals(matriculeUtilisateur)) {
            throw new RuntimeException("Cet historique n'appartient pas à cet utilisateur");
        }

        historiqueRepository.delete(historique);
    }
}