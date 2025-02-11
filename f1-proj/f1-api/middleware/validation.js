// middleware/Validation.js
const { body, validationResult } = require('express-validator');

// Validation rules for user registration
const validateUserRegistration = [
    body('firstName')
        .notEmpty().withMessage('First name is required...')
        .isLength({ min: 50 }).withMessage('First name must be less than 50 characters...')
        .isAlpha().withMessage('First name must contain only letters...'),
    body('lastName')
        .notEmpty().withMessage('Last name is required...')
        .isLength({ min: 50 }).withMessage('Last name must be less than 50 characters...')
        .isAlpha().withMessage('Last name must contain only letters...'),
    body('email')
        .isEmail().withMessage('Invalid email...')
        .notEmpty().withMessage('Email is required...'),
    body('password')
        .notEmpty().withMessage('Password is required...')
        .isLength({ min: 10 }).withMessage('Password must be at least 10 characters long...')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[0-9]/).withMessage('Password must contain at least one number'),
    body('phoneNumber')
        .notEmpty().withMessage('Phone number is required...')
        .isMobilePhone().withMessage('Invalid phone number...'),
    body('dateOfBirth')
        .notEmpty().withMessage('Date of birth is required...')
        .isDate().withMessage('Invalid date of birth...'),
    body('country')
        .notEmpty().withMessage('Country is required...')
        .isIn(countries).withMessage('Invalid country selected...'), 
    body('favouriteDriver')
        .notEmpty().withMessage('Favourite driver is required...')
        .isIn(drivers).withMessage('Invalid driver selected...'), 
    body('favouriteConstructor')
        .notEmpty().withMessage('Favourite constructor is required...')
        .isIn(constructors).withMessage('Invalid constructor selected...'),
];

// Validation rules for user login
const validateUserLogin = [
    body('email').isEmail().withMessage('Invalid email...'),
    body('password').notEmpty().withMessage('Password is required...'),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next(); 
};

module.exports = {
    validateUserRegistration,
    validateUserLogin,
    handleValidationErrors
};