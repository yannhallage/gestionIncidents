package com.example.service_notifications.service;

import com.example.service_notifications.model.Notification;
import com.example.service_notifications.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notification> getNotifications(String matricule) {
        return notificationRepository.findByMatricule(matricule);
    }

    public Notification addNotification(Notification notification) {
        System.out.println("Sauvegarde de la notification : " + notification);
        return notificationRepository.save(notification);
    }
}