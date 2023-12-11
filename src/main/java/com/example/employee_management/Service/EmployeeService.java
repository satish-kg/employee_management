package com.example.employee_management.Service;

import com.example.employee_management.Exception.ResourceNotFoundException;
import com.example.employee_management.Models.EmployeeModel;
import com.example.employee_management.Models.UpdateEmployeeModel;
import com.example.employee_management.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<EmployeeModel> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public EmployeeModel createEmployee(EmployeeModel employeeModel){
        return(employeeRepository.save(employeeModel));
    }

    public ResponseEntity<EmployeeModel> getEmployeeById(int id){
        EmployeeModel employeeModel = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id : "+id));
        return ResponseEntity.ok(employeeModel);
    }

    // public ResponseEntity<EmployeeModel> updateEmployee(int id, EmployeeModel employeeDetails){
    //     EmployeeModel employeeModel = employeeRepository.findById(id)
    //             .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id : "+id));

    //     employeeModel.setFirst_name(employeeDetails.getFirst_name());
    //     employeeModel.setLast_name(employeeDetails.getLast_name());
    //     employeeModel.setEmail(employeeDetails.getEmail());

    //     EmployeeModel updatedEmployee = employeeRepository.save(employeeModel);

    //     return ResponseEntity.ok(updatedEmployee);
    // }

    public ResponseEntity<EmployeeModel> updateEmployee(UpdateEmployeeModel updateEmployeeModel){
        EmployeeModel employeeModel = employeeRepository.findById(updateEmployeeModel.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id : "+updateEmployeeModel.getId()));

        employeeModel.setFirst_name(updateEmployeeModel.getFirst_name());
        employeeModel.setLast_name(updateEmployeeModel.getLast_name());
        employeeModel.setEmail(updateEmployeeModel.getEmail());

        EmployeeModel updatedEmployee = employeeRepository.save(employeeModel);

        return ResponseEntity.ok(updatedEmployee);
    }

    public ResponseEntity<Map<String, Boolean>> deleteEmployee(int id){
        EmployeeModel employeeModel = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id : "+id));

        employeeRepository.deleteById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
