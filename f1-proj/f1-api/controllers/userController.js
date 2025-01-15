// controllers/userController.js
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { ...req.body, password: hashedPassword };
        const userId = await userModel.createUser(user);

        // Issue a JWT after successful registration
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: 'User registered!',
            userId,
            // Send the token to the client
            token  
        });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findUserByEmail(email);  

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed! User not found...' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed! Wrong password...' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            message: 'User logged in successfully!',
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error!', error });
    }
};

