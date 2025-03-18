package com.example.service_auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.example.service_auth.model") // Spécifiez le package des entités
public class ServiceAuthApplication {
	public static void main(String[] args) {
		SpringApplication.run(ServiceAuthApplication.class, args);
	}
}