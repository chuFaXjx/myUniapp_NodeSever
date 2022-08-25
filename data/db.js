const mysql = require('mysql2');
const connections = mysql.createPool({
  host: '192.168.0.132',
  user: 'root',
  password: '123456',
  database: 'uniappdatabase',
  port: '3306'
})
connections.getConnection((err, conn) => {
  conn.connect(err => {
    if (err) {
      console.log("连接失败：", err);
    } else {
      console.log("数据库连接成功~");
    }

  });
})
module.exports = connections.promise()

