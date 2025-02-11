// models/userModels.js
const {sql, poolPromise} = require('../config/db');

// Import the db configuration and connection pool
const createUser = async (userData) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('StatusID', sql.Int, userData.StatusID)
            .input('firstName', sql.VarChar(50), userData.firstName)
            .input('lastName', sql.VarChar(50), userData.lastName) 
            .input('userName', sql.VarChar(50), userData.userName) 
            .input('password', sql.VarChar(255), userData.password) 
            .input('email', sql.VarChar(255), userData.email) 
            .input('phoneNumber', sql.VarChar(20), userData.phoneNumber) 
            .input('country', sql.Char(3), userData.country) 
            .input('favouriteDriver', sql.VarChar(100), userData.favouriteDriver) 
            .input('favouriteConstructor', sql.VarChar(100), userData.favouriteConstructor)
            .input('subscriptionStatus', sql.Int, userData.subscriptionStatus || 0)
            .input('dateOfBirth', sql.Date, userData.dateOfBirth || null)

            .query(`INSERT INTO users (
            firstName, lastName, userName, password, email, 
            phoneNumber, subscriptionStatus, dateOfBirth, country, 
            favouriteDriver, favouriteConstructor) 
            VALUES (
            @firstName, @lastName, @userName, @password,@email, 
            @phoneNumber, @subscriptionStatus, @dateOfBirth, @country, 
            @favouriteDriver, @favouriteConstructor); 
            SELECT SCOPE_IDENTITY() as id;
            `);
        return result.recordset[0].id;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user...');
    }
};

// Find a user by email in the db
const findUserByEmail = async (email) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM users WHERE email = @email');
        return result.recordset[0];  
    } catch (error) {
        console.error('Error finding user by email:', error);
        throw new Error('Failed to find user...');
    }
};

// Checks if a user exists in the database by email
const doesUserAlreadyExist = async (email) => {
    try {
        const pool = await poolPromise; 
        const result = await pool.request()
            .input('email', sql.VarChar(255), email) 
            .query('SELECT COUNT(*) AS count FROM users WHERE email = @email'); 
        return result.recordset[0].count > 0; 
    } catch (error) {
        console.error('Error checking if user exists:', error);
        throw new Error('Failed to check user existence');
    }
};

module.exports = {
    createUser,
    findUserByEmail,
    doesUserAlreadyExist
};
