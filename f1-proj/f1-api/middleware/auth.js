// Authentication jwt
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel');

// Function to handle user login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findUserByEmail(email);

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed! User not found...' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed! Wrong password...' });
        }

        // User is authenticated, generate a JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: 'User logged in successfully!',
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error!', error });
    }
};
