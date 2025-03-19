package com.example.service_historique.controller;

import com.example.service_historique.model.Historique;
import com.example.service_historique.service.HistoriqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/historique")
public class HistoriqueController {

    @Autowired
    private HistoriqueService historiqueService;

    // Récupérer l'historique d'un utilisateur
    @GetMapping("/{matriculeUtilisateur}")
    public ResponseEntity<List<Historique>> getHistorique(@PathVariable String matriculeUtilisateur) {
        List<Historique> historiqueList = historiqueService.getHistorique(matriculeUtilisateur);
        return new ResponseEntity<>(historiqueList, HttpStatus.OK);
    }

    // Ajouter un nouvel historique
    @PostMapping
    public ResponseEntity<Historique> addHistorique(@RequestBody Historique historique) {
        Historique savedHistorique = historiqueService.addHistorique(historique);
        return new ResponseEntity<>(savedHistorique, HttpStatus.CREATED);
    }

    // Mettre à jour un historique existant
    @PutMapping("/{id}/{matriculeUtilisateur}")
    public ResponseEntity<Historique> updateHistorique(
            @PathVariable Long id,
            @PathVariable String matriculeUtilisateur,
            @RequestBody Historique historiqueDetails) {
        Historique updatedHistorique = historiqueService.updateHistorique(id, historiqueDetails, matriculeUtilisateur);
        return new ResponseEntity<>(updatedHistorique, HttpStatus.OK);
    }

    // Supprimer un historique
    @DeleteMapping("/{id}/{matriculeUtilisateur}")
    public ResponseEntity<Void> deleteHistorique(
            @PathVariable Long id,
            @PathVariable String matriculeUtilisateur) {
        historiqueService.deleteHistorique(id, matriculeUtilisateur);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Gestion des exceptions
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }
}