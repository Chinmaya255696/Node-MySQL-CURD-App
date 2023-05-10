const mysql = require("mysql2");

// diffrence between mysql and mysql2 package

/* Both mysql and mysql2 are Node.js packages that provide a client library for connecting to a MySQL database. However, there are some differences between the two packages that may make one more preferable than the other depending on your use case.

Here are some key differences between mysql and mysql2:

Performance: mysql2 is generally considered to be faster than mysql. This is because mysql2 uses the Node.js Streams API for data streaming, whereas mysql uses a more traditional callback-based approach.

Connection pooling: mysql2 includes built-in support for connection pooling, whereas mysql does not. Connection pooling can improve the performance and scalability of your application by reusing existing database connections rather than creating new ones for each request.

Promise-based API: mysql2 has a promise-based API, 
which allows for more concise and readable code when working with asynchronous operations.
 mysql does not have a built-in promise-based API,
  but it can be used with promises using libraries such as util.promisify */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
/* 
This line of code is checking whether the NODE_ENV environment variable is not set to "production". If it's not, it loads environment variables from a .env file in the project directory using the dotenv package.

The NODE_ENV environment variable is a convention used in Node.js applications to specify the current environment the application is running in, such as "development", "test", or "production". Typically, different environments have different configurations, such as database connection details, API keys, or logging settings.

By checking the NODE_ENV variable and loading environment variables from a .env file in non-production environments, we can keep sensitive information like database credentials out of version control and make it easier to switch between environments.

The dotenv package reads the contents of a .env file and sets environment variables in the current process based on the key-value pairs in the file. This allows us to define environment-specific configuration variables in a file and load them into the application automatically.
*/

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

/* `mysql.createPool()` is a method provided by the `mysql2` package in Node.js that creates a pool of reusable database connections. A connection pool is a cache of database connections that allows multiple requests to reuse existing connections rather than creating new ones for each request. This can improve the performance and scalability of a Node.js application that frequently accesses a MySQL database.

Here's a breakdown of the parameters that can be passed to `mysql.createPool()`:

- `config` (required): an object that specifies the database connection details, including:
  - `host`: the hostname or IP address of the MySQL server.
  - `port`: the port number of the MySQL server. Default is `3306`.
  - `user`: the MySQL user to authenticate as.
  - `password`: the password for the MySQL user.
  - `database`: the name of the MySQL database to use for the connection.
  - `connectionLimit`: the maximum number of connections that can be created in the pool. Default is `10`.
  - `waitForConnections`: a boolean value that determines whether the pool should block requests until a connection is available. Default is `true`.
  - `queueLimit`: the maximum number of requests that can be queued when all connections are in use. Default is `0`.

`mysql.createPool()` returns an object that represents the connection pool. 
The object has methods for acquiring and releasing connections,
 and for running queries against the database using either callbacks or promises.
  By default, the `mysql2` package returns a connection pool that uses the Promise API.
   However, you can also obtain a connection that uses the callback API by calling `pool.getConnection()` and passing a callback function. */

// test the connection to the database

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database successfully!");
    connection.release();
    /* Calling connection.release() is the correct way to do this.
     It tells the connection pool that we're done with the connection and that
      it can be reused. If we don't release the connection, 
      the connection pool will eventually run out of available connections,
     and our application will be unable to execute any further SQL queries. */
  }
});

module.exports = db.promise();

/* module.exports = pool.promise() exports the Promise-based version of the 
MySQL connection pool, which allows us to use the Promise API for database operations
 instead of the callback API.

In the original example code, we used mysql2 module's pool.promise() 
method to create a promise-based version of the connection pool.
 By assigning it to module.exports, we can make
 this Promise-based connection pool available to other modules in our Node.js application */
