const db = require("./DB/db");
const express = require("express");

// create express app
var app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// define a root route
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/node", function (req, res) {
  res.send("<p>Welcome to the node project</p>");
});

app.get("/about", function (req, res) {
  res.send("<p>About page</p>");
});

// Require employee routes
const employeeRoutes = require("./src/route/employee.route");

// using as middleware
app.use("/", employeeRoutes);

// Setup server port
const port = process.env.PORT || 8090;

// listen for requests
app.listen(port, () => console.log(`Expess server listening on port ${port}`));
