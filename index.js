const connection = require("./config/connection");

const express = require("express");

const bodyParser = require("body-parser");

// create express app
var app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Setup server port
const port = process.env.PORT || 3000;

// listen for requests
app.listen(port, () => console.log(`Expess server listening on port ${port}`));
