const express = require("express");

const router = express.Router();
const employeeController = require("../controller/employee.controller");
// Retrieve all employees
router.get("/employees", employeeController.getAllEmployees);

//Create a new employee
router.post("/employees", employeeController.createEmployee);

//Retrieve a single employee with id
router.get("/employees/:id", employeeController.getEmployeeById);

// Update a employee with id
router.put("/employees/:id", employeeController.updateEmployee);

// Delete a employee with id
router.delete("/employees/:id", employeeController.deleteEmployee);

module.exports = router;
