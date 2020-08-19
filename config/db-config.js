let mysql = require('mysql');

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST, 
    database: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    connectionLimit: 5
  }

  var connectionPool = mysql.createPool(config);
  
  module.exports = {
    getConnection : function(callback) {
        connectionPool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    }
  };