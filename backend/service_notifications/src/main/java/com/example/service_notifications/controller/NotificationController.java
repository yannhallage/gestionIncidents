package com.example.service_notifications.controller;

import com.example.service_notifications.model.Notification;
import com.example.service_notifications.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{matricule}")
    public List<Notification> getNotifications(@PathVariable String matricule) {
        return notificationService.getNotifications(matricule);
    }

    @PostMapping
    public Notification addNotification(@RequestBody Notification notification) {
        return notificationService.addNotification(notification);
    }
}