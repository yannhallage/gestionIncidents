package com.example.service_notifications.repository;

import com.example.service_notifications.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List; // Importation ajoutée

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByMatricule(String matricule);
}