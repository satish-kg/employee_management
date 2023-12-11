package com.example.employee_management.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/v1/**").allowedOrigins("**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }

    // NEED TO CHECK THIS OUT
    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/api/v1/**") // Adjust the mapping to match your API endpoints
    //             .allowedOrigins("http://localhost:5173") // Allow requests from this origin
    //             .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific HTTP methods
    //             .allowedHeaders("*"); // Allow all headers (you can specify particular headers if needed)
    // }
}
// public class CorsConfig {
    
// }
