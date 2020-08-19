const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

router.route('/')
  /** GET /api/users - Get list of users */
  .get(userController.list)
  /** POST /api/users - Create new user */
  .post(userController.createUser);

router.route('/:userId')
  /** PUT /api/users/:userId - update existing user */
  .put(userController.updateUser)
  /** DELETE /api/users/:userId - delete existing user */
  .delete(userController.deleteUser);

module.exports = router;