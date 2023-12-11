package com.example.employee_management.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateEmployeeModel {
    @Id
    private int id;
    private String first_name;
    private String last_name;
    private String email;
}
