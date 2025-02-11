// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { validateUserRegistration, validateUserLogin, handleValidationErrors } = require('../middlewares/validationMiddleware');

// Route for registering a new user
router.post('/register',  validateUserRegistration, handleValidationErrors, registerUser);

// Route for user login
router.post('/login', validateUserLogin, handleValidationErrors, loginUser);

// Export the router to be used in the app
module.exports = router;
