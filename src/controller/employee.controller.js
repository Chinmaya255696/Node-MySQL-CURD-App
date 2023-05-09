// 'use strict';
const Employee = require("../model/employee.model");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json({ employee });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const employeeData = req.body; // Assuming the employee data is passed in the request body

    const newEmployee = new Employee(employeeData); // Create a new instance of Employee class

    const result = await Employee.create(newEmployee); // Insert employee data into database

    res.status(201).json({ message: 'Employee record created successfully!', id: result.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating employee record' });
  }
  
};

exports.deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Employee.deleteById(id);
    if (result === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// exports.updateEmployee = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const employeeData = req.body;
//     const updatedEmployee = await Employee.updateById(id, employeeData);
//     if (!updatedEmployee) {
//       return res.status(404).json({ message: "Employee not found" });
//     }
//     res.status(200).json(updatedEmployee);
//   } catch (error) {
//     next(error);
//   }
// };



exports.updateEmployee = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const updatedEmployee = await Employee.update(id, updateData);
    if (updatedEmployee) {
      res.status(200).json({
        message: "Employee updated successfully",
        data: updatedEmployee,
      });
    } else {
      res.status(404).json({
        message: "Employee not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};




