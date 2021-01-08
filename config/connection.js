const mysql = require("mysql");
var password = require("./password.js");


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "burgers_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("CONNECTED AS ID: " +  connection.threadId);
});

module.exports = connection;