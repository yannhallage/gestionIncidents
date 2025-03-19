package com.example.service_notifications.controller;

import com.example.service_notifications.model.Notification;
import com.example.service_notifications.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = {"http://localhost:8083", "http://localhost:5173"})
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{matricule}")
    public List<Notification> getNotifications(@PathVariable String matricule) {
        System.out.println("GET /notifications/" + matricule);
        return notificationService.getNotifications(matricule);
    }

    @PostMapping
    public Notification addNotification(@RequestBody Notification notification) {
        System.out.println("POST /notifications - Reçu : " + notification);
        try {
            Notification savedNotification = notificationService.addNotification(notification);
            System.out.println("Notification enregistrée : " + savedNotification);
            return savedNotification;
        } catch (Exception e) {
            System.err.println("Erreur dans addNotification : " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }
}