# Node-MySQL-CURD-App
# Employee Management System

This is a CRUD API for managing employee data. It is built using Express and MySQL2 package.

## Installation Guide

### Requirements
- Node.js v12.16.1 or higher
- MySQL v8.0.23 or higher

### Installation
1. Clone the repository: `git clone https://github.com/Chinmaya255696/Node-MySQL-CURD-App.git`
2. Install dependencies: `npm install`
3. Create a `.env` file and add your MySQL database credentials:
4. Start the app: `npm start`

## Usage Guide

### Starting the app
To start the app, run `npm start`. The app will start running on `http://localhost:3000`.

### Endpoints
- GET `/employees`: Retrieve all employees.
- GET `/employees/:id`: Retrieve employee by ID.
- POST `/employees`: Create a new employee.
- PUT `/employees/:id`: Update employee by ID.
- DELETE `/employees/:id`: Delete employee by ID.

Examples:
- To retrieve all employees, send a GET request to `http://localhost:3000/employees`.
- To retrieve employee with ID 1, send a GET request to `http://localhost:3000/employees/1`.
- To create a new employee, send a POST request to `http://localhost:3000/employees` with the employee data in the request body.
- To update employee with ID 1, send a PUT request to `http://localhost:3000/employees/1` with the updated employee data in the request body.
- To delete employee with ID 1, send a DELETE request to `http://localhost:3000/employees/1`.

## Contribution Guide

To contribute to this project, please follow these guidelines:
- Fork the repository.
- Create a new branch for your feature/fix.
- Make your changes and commit them with a clear message.
- Push your changes to your forked repository.
- Submit a pull request to the original repository.

## License

This project is licensed under the MIT License.
