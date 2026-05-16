import { Component, signal } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees = signal<Employee[]>([]);

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe({
      next: (data) => {
        this.employees.set(data);
        this.employees.set(data.sort((a, b) => a.id - b.id));
        console.log(this.employees());
      },
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe({
      next: data => {
        console.log(data);
        this.getEmployees();
      }
    })
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
}
