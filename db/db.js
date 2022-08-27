const mysql = require("mysql2");

var connection = mysql.createConnection({
  // host: "192.168.0.132",
    host: "localhost",
  user: "root",
  password: "mysqlzhu",
  //   database: "xjx",
  database: "db",
  port: "3306",
});

module.exports = connection;
