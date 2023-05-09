// const express = require("express");

// const mysql = require("mysql2");

// // create express app
// var app = express();

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("MySQL Database connection established");
// });

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// //CURD Operations

// app.get("/getUserList", function (req, res) {
//   let query = "select * from employees";

//   db.query(query, (err, result) => {
//     if (err) {
//       res.json({ msg: err });
//     } else {
//       res.json({ msg: result });
//     }
//   });
// });

// app.post("/saveUser", function (req, res) {
//   let query = "insert into  employees  SET ?";

//   console.log(req.body);

//   let postData = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     phone: req.body.phone,
//     organization: req.body.organization,
//     designation: req.body.designation,
//     salary: req.body.salary,
//     created_at : new Date(),
//     // updated_at : new Date()

//   };
//   db.query(query, postData, (err, result) => {
//     if (err) {
//       res.json({ msg: err });
//     } else {
//       res.json({ msg: "Inserted sucssessfully" });
//     }
//   });
// });

// app.put("/updateUser/:id", function (req, res) {
//   let query = `update employees set 
//   first_name ='${req.body.first_name}',
//   last_name ='${req.body.last_name}',
//    email='${req.body.email}',
//    phone='${req.body.phone}',
//    organization='${req.body.organization}',
//    designation='${req.body.designation}',
//    salary='${req.body.salary}'

//    where id = ${req.params.id}`;

//   db.query(query, (err, result) => {
//     if (err) {
//       res.json({ msg: err });
//     } else {
//       res.json({ msg: "update data successfully" });
//     }
//   });
// });

// app.post("/deleteUser/:id", function (req, res) {
//   let query = `delete from employees  where id = ${req.params.id}`;

//   db.query(query, (err, result) => {
//     if (err) {
//       res.json({ msg: err });
//     } else {
//       res.json({ msg: "delete data successfully" });
//     }
//   });
// });
// // define a root route
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.get("/node", function (req, res) {
//   res.send("<p>Welcome to the node project</p>");
// });

// app.get("/about", function (req, res) {
//   res.send("<p>About page</p>");
// });

// // Require employee routes
// const employeeRoutes = require("../route/employee.route");

// // using as middleware
// app.use("/", employeeRoutes);

// // Setup server port
// const port = process.env.PORT || 8090;

// // listen for requests
// app.listen(port, () => console.log(`Expess server listening on port ${port}`));
