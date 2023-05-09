const express = require("express");

const router = express.Router();
const employeeController = require("../controller/employee.controller");
// Retrieve all employees
router.get('/getAll', employeeController.getAllEmployees);

//Create a new employee
router.post("/post", employeeController.createEmployee);

//Retrieve a single employee with id
router.get('/get/:id', employeeController.getEmployeeById);

// Update a employee with id
router.put('/update/:id', employeeController.updateEmployee);

// Delete a employee with id
router.delete('/delete/:id', employeeController.deleteEmployee);

module.exports = router;
