const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'luan',
  password: 'vcnaosabe',
  database: 'model_example'
});

module.exports = connection;