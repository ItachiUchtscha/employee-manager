import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {}
  ngOnInit() {}

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe({
      next: data => console.log(data),
      error: err => console.error(err)
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    this.saveEmployee();
    this.goToEmployeeList()
  }

}
