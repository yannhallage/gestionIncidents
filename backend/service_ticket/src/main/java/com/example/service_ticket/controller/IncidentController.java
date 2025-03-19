package com.example.service_ticket.controller;

import com.example.service_ticket.model.Incident;
import com.example.service_ticket.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
@CrossOrigin(origins = "http://localhost:5173") // Ajouté ici
public class IncidentController {
    @Autowired
    private IncidentService incidentService;

    @GetMapping("/utilisateur/{utilisateurId}")
    public ResponseEntity<List<Incident>> getIncidentsByUtilisateur(@PathVariable String utilisateurId) {
        List<Incident> incidents = incidentService.getIncidentsByUtilisateur(utilisateurId);
        return new ResponseEntity<>(incidents, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Incident> addIncident(@RequestBody Incident incident) {
        Incident savedIncident = incidentService.addIncident(incident);
        return new ResponseEntity<>(savedIncident, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Incident> updateIncident(@PathVariable Long id, @RequestBody Incident incidentDetails) {
        Incident updatedIncident = incidentService.updateIncident(id, incidentDetails);
        return new ResponseEntity<>(updatedIncident, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIncident(@PathVariable Long id) {
        incidentService.deleteIncident(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }
}