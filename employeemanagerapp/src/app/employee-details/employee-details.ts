import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
  id: number = 0;
  employee= signal<Employee>(new Employee());

  constructor(private route: ActivatedRoute, private employeeService:EmployeeService){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: data =>
      {
        this.employee.set(data);
      }
    })
  }
}
