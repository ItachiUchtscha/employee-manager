# Employee Manager (Angular + Spring Boot)

first simple spring boot project to test REST API

### Backend
- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- PostgreSQL

### Frontend
- Angular
- TypeScript
- HTML/CSS
- Angular HttpClient

## Backend setup

### 1. Navigate to backend
cd employeemanager

### 2. Set environment variables
$env:DB_USER="root"
$env:DB_PASS="yourpassword"

### 3. run spring boot
./mvnw spring-boot:run

### endpoints

Get all employees:
GET http://localhost:8080/api/v1/employees

Get employee by ID:
GET http://localhost:8080/api/v1/employees/1

Create employee:
POST http://localhost:8080/api/v1/employees

Update employee:
PUT http://localhost:8080/api/v1/employees/1

Delete employee:
DELETE http://localhost:8080/api/v1/employees/1

## Frontend setup:

### 1. Navigate to frontend 
cd employeemanagerapp

### 2. install dependencies
npm install

### 3. run angular app
ng serve
runs on: http://localhost:4200

