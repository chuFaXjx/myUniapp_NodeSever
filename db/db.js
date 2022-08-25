const mysql = require('mysql2');

var connection = mysql.createConnection({
    host  : '192.168.0.132',
    user  : 'root',
    password : '123456',
    database : 'uniappdatabase',
    port:'3306'
}) 
 
module.exports = connection;
