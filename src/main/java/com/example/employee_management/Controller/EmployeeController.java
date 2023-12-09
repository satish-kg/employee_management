package com.example.employee_management.Controller;

import com.example.employee_management.Models.EmployeeModel;
import com.example.employee_management.Service.EmployeeService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") //this localhost address was looked up from the error generated in browser console (F12)
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employees/getAll")
    public List<EmployeeModel> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @PostMapping("/employee/create")
    public EmployeeModel createEmployee(@RequestBody EmployeeModel employeeModel){
        return employeeService.createEmployee(employeeModel);
    }

    @GetMapping("/employee/get/{id}")
    public ResponseEntity getEmployeeById(@PathVariable int id){
        return employeeService.getEmployeeById(id);
    }

    @PutMapping("/employee/update")
    public ResponseEntity updateEmployee(@PathVariable int id, @RequestBody EmployeeModel employeeDetails){
        return employeeService.updateEmployee(id, employeeDetails);
    }

    @DeleteMapping("/employee/delete/{id}")
    public ResponseEntity deleteEmployee(@PathVariable int id){
        return employeeService.deleteEmployee(id);
    }
}
