package com.crudEmployee.crudEmployee.controller;

import com.crudEmployee.crudEmployee.exception.ResourceNotFound;
import com.crudEmployee.crudEmployee.model.Employee;
import com.crudEmployee.crudEmployee.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepo employeeRepo;

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){

        return employeeRepo.findAll();
    }

    // create employee rest API
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){

        return employeeRepo.save(employee);

    }
    // Get employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){

        Employee employee = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFound("Employee not found with id : " + id));

        return ResponseEntity.ok(employee);
    }

}
