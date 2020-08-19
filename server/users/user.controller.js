const ConnectionPool = require('../../config/db-config')

/**
 * Get user list.
 */
function list(req, res) {
    const querystring=`select * from users`;
    ConnectionPool.getConnection((err, connection) => {
        connection.query(querystring, (error, results, fields) => {
            res.send(results);
        });
      });
  }

/**
 * Create new user
 */
function createUser(req, res) {
    const body = req.body;
    const querystring=`INSERT INTO users(name)
    VALUES(?)`;
    const placeholders = [body.name];
    console.log(body)
    ConnectionPool.getConnection((err, connection) => {
        connection.query(querystring, placeholders, (error, results, fields) => {
            res.send('User ID: '+results.insertId,201);
        });
      });
  }

/**
 * update existing user
 */
function updateUser(req, res) {
    const body = req.body;
    const querystring=`UPDATE users SET name = ?
    WHERE id = ?`;
    const placeholders = [body.name,req.params.userId];
    ConnectionPool.getConnection((err, connection) => {
        connection.query(querystring,placeholders, (error, results, fields) => {
            res.send(results);
        });
      });
  }

/**
 * delete existing user
 */
function deleteUser(req, res) {
    const querystring=`delete FROM users WHERE id = ?`;
    const placeholders = [req.params.userId];
    ConnectionPool.getConnection((err, connection) => {
        connection.query(querystring,placeholders, (error, results, fields) => {
            res.send(results);
        });
      });
  }

module.exports = { list, createUser, updateUser,deleteUser };