const express = require('express');
const userRoutes = require('./server/users/user.route');


const router = express.Router();

/** GET /status/info - Check service health */
router.get('/status/info', (req, res) =>
  res.send('Application is running successfully')
);

// mount user routes at /users
router.use('/users', userRoutes);

module.exports = router;