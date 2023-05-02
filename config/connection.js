"use strict";
const mysql = require("mysql2");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2556",
  database: "node_mysql_curd_db",
});
var connection = mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error in DB connection:" + JSON.stringify(err, undefined, 2));
  } else {
    console.log("DB connection established");
  }
});

module.exports = connection;
