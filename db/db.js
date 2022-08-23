const mysql = require('mysql2');

var connection = mysql.createConnection({
    host  : 'localhost',
    user  : 'root',
    password : '123456',
    database : 'uniappdatabase',
    port:'3306'
}) 

module.exports = connection;

