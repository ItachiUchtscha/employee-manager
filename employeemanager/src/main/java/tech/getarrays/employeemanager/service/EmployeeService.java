package tech.getarrays.employeemanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.exception.ResourceNotFoundException;
import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repository.EmployeeRepository;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepo;

    public EmployeeService(EmployeeRepository employeeRepo){
        this.employeeRepo = employeeRepo;
    }

    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User by id " + id +" was not found"));
    }

    public void deleteEmployeeById(Long id) {
        employeeRepo.deleteById(id);
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public List<Employee> addEmployees(List<Employee> employees) {
        return employeeRepo.saveAll(employees);
    }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = employeeRepo.findEmployeeById(id)
                .orElseThrow(() -> new ResourceNotFoundException("user with id:" + id + " not found"));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        return employeeRepo.save(employee);
    }
}
