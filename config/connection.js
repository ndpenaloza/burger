//Dependencies
const mysql = require("mysql");
var password = require("./password");

// Connection to MySQL 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: password,
    database: "burgers_db"
  });
};


// Connecting to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log("CONNECTED AS ID: " +  connection.threadId);
});

// Module export
module.exports = connection;