// auth.js

// Import required modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel');

// Handles user login
// Verifie the users email and password match in the db
// Issues a JWT upon successful authentication
exports.loginUser = async (req, res) => {
    try {
        // Extract all email and password from the req body
        const { email, password } = req.body;

        // Query the db to find a user with the provided email
        const user = await UserModel.findUserByEmail(email);

        // If no user is found return a 401 unauthorized msg
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed! User not found...' });
        }

        // Compare the provided password from the user with the hashed pass in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed! Wrong password...' });
        }

        // If auth is successful generate a JWT
        // The payload includes userID and token expires in 1 hour
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Inform user of success msg with the generated JWT
        res.json({
            message: 'User logged in successfully!',
            token
        });
    } catch (error) {
        // Handle any errors respond with 500 internal error
        res.status(500).json({ message: 'Server error!', error });
    }
};
