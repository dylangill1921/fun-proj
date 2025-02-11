// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { handleValidationErrors } = require('../middlewares/validationMiddleware');

exports.registerUser = async (req, res) => {
    try {
    const { email, password, ...otherData } = req.body;

    // Check if user already exists
    const emailExists = await userModel.doesUserAlreadyExist(email);
    if (emailExists) {
        return res.status(400).json({ message: 'Email already exists!' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { ...req.body, password: hashedPassword };

    // Create user
    const userId = await userModel.createUser(user);

    // Generate JWT
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({
        message: 'Successful! User registered!',
        userId,
        token
    });
    } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user...', error: error.message });
    }
};

// Logins a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

    // Find user by email
    const user = await userModel.findUserByEmail(email);
    if (!user) {
        return res.status(401).json({ message: 'Authentication failed! User not found...' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Authentication failed! Wrong password...' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
        message: 'User logged in successfully!',
        token,
    });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error...', error: error.message });
    }
};

