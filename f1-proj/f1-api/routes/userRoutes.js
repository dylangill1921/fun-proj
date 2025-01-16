// routes/userRoutes.js

// Import the required modules
const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/userController');

// Route for registering a new user
router.post('/register', registerUser);

// Route for a new login
router.post('/login', loginUser);

// Export the router to be used in the app
module.exports = router;
