package tech.getarrays.employeemanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repository.EmployeeRepository;
import tech.getarrays.employeemanager.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeService.findAllEmployees();
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.findEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @PostMapping("/employees/batch")
    public List<Employee> addEmployees(@RequestBody List<Employee> employees){
        return employeeService.addEmployees(employees);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee updatedemployee = employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(updatedemployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployeeById(id);
        return ResponseEntity.ok().build();
    }

}
