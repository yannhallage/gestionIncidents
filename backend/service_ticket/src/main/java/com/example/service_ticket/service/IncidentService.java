package com.example.service_ticket.service;

import com.example.service_ticket.model.Incident;
import com.example.service_ticket.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IncidentService {

    @Autowired
    private IncidentRepository incidentRepository;

    @Autowired
    private RestTemplate restTemplate;

    private static final String NOTIFICATION_SERVICE_URL = "http://localhost:8081/api/notifications";

    public List<Incident> getIncidentsByUtilisateur(String utilisateurId) {
        return incidentRepository.findByUtilisateurId(utilisateurId);
    }

    public Incident addIncident(Incident incident) {
        if (incident.getDateCreation() == null) {
            incident.setDateCreation(LocalDateTime.now());
        }
        System.out.println("Incident avant sauvegarde : " + incident);
        Incident savedIncident = incidentRepository.save(incident);
        System.out.println("Incident sauvegardé : " + savedIncident);

        // Envoyer une notification à service_notifications
        sendNotification(savedIncident);

        return savedIncident;
    }

    private void sendNotification(Incident incident) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> notificationData = new HashMap<>();
        String utilisateurId = incident.getUtilisateurId();
        notificationData.put("message", "Nouveau ticket créé : " + incident.getDescription());
        notificationData.put("matricule", utilisateurId != null ? utilisateurId : "MATRICULE_ABSENT");

        System.out.println("Envoi de la notification à : " + NOTIFICATION_SERVICE_URL);
        System.out.println("Données envoyées : " + notificationData);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(notificationData, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    NOTIFICATION_SERVICE_URL,
                    HttpMethod.POST,
                    request,
                    String.class
            );
            System.out.println("Réponse : " + response.getStatusCode() + " - " + response.getBody());
        } catch (Exception e) {
            System.err.println("Erreur lors de l’envoi de la notification : " + e.getMessage());
            e.printStackTrace();
        }
    }

    public Incident updateIncident(Long id, Incident incidentDetails) {
        Incident incident = incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incident non trouvé"));

        incident.setDescription(incidentDetails.getDescription());
        incident.setType(incidentDetails.getType());
        incident.setPriorite(incidentDetails.getPriorite());
        incident.setStatut(incidentDetails.getStatut());
        incident.setLieu(incidentDetails.getLieu());
        incident.setUtilisateurId(incidentDetails.getUtilisateurId());

        return incidentRepository.save(incident);
    }

    public void deleteIncident(Long id) {
        Incident incident = incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incident non trouvé"));
        incidentRepository.delete(incident);
    }
}