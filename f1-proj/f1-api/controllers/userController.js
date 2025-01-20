// controllers/userController.js

// Import required modules
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
// Hashes the users password for security
// Stores the user in the database through the user model
// Issues a jwt token upon successful registration
exports.registerUser = async (req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password, ...otherData } = req.body; 

        // Check if the email already exists in the db
        const emailExists = await userModel.doesUserExistByEmail(email);
        if (emailExists) {
            return res.status(400).json({ message: 'Email already exists! Please use a different email...' });
        }

        // Hash the password with a salt of 10 rounds for security
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Combine the req body with the hashed password to then send to the user object
        const user = { ...req.body, password: hashedPassword };

        // Save the new user in the database and retrieve the new users ID
        const userId = await userModel.createUser(user);

        // Generate a JWT token for the new user
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

        // Respond with a success msg, the users ID, and the generated token
        res.status(201).json({
            message: 'User registered!',
            userId,
            token  
        });
    } catch (error) {
        // Handle any errors during registration with a 500 status code
        res.status(500).json({ message: 'Error registering user...', error });
    }
};

// Logins a user
// Verifies the users email and password via the db
// Issues a JWT token upon successful user login
exports.loginUser = async (req, res) => {
    try {

        // Extracts email and password from the user body
        const { email, password } = req.body;
        
        // Finds the user by email in db
        const user = await userModel.findUserByEmail(email);  
        
        // If the user is not found return a 401 with unauthorized error
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed! User not found...' });
        }

        // Compare the password provided with the hashed  password in the db
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed! Wrong password...' });
        }

        // Generate a JWT token and msg for authorized user
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            message: 'User logged in successfully!',
            token
        });
    } catch (error) 
    {
        // Handle any errors during login with a 500 status code
        res.status(500).json({ message: 'Server error', error });
    }
};

