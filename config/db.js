const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'vuln_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('DB connected');
});

module.exports = connection;
