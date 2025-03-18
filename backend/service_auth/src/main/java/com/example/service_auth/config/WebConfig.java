package com.example.service_auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permet à toutes les routes de l'application d'accepter les requêtes venant de http://localhost:3000
        registry.addMapping("/**") // Toutes les routes
                .allowedOrigins("http://localhost:5173") // Frontend React
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Méthodes HTTP autorisées
                .allowedHeaders("*"); // Autorise tous les headers
    }
}
