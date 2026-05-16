import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseUrl}/employees`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}/employees/${id}`, employee);
  }

  getEmployeeById(id: number) : Observable<Employee> {
    return this.httpClient.get<Employee>( `${this.baseUrl}/employees/${id}`);
  }

  deleteEmployeeById(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/employees/${id}`);
  }
}
