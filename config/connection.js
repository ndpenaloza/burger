const mysql = require("mysql");
var password = require("./password.js");

module.exports = (mysql) => {
    const connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: password.usePassword(),
      database: "burgers_db"
    });
    
    return client;
  }