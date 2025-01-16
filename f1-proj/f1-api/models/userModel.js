// models/userModels.js
const {sql, poolPromise} = require('../config/db');

// Import the db configuration and connection pool
const createUser = async (userData) => {
    try {
        // Get the db connection pool
        const pool = await poolPromise;

        // Execute the sql query to insert a new user into the db
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
        .query(`INSERT INTO users (
            firstName, 
            lastName, 
            userName, 
            password, 
            email, 
            phoneNumber, 
            subscriptionStatus, 
            dateOfBirth, 
            country, 
            favouriteDriver, 
            favouriteConstructor) 
            VALUES (
            @firstName, 
            @lastName, 
            @userName, 
            @password,
            @email, 
            @phoneNumber, 
            @subscriptionStatus, 
            @dateOfBirth, 
            @country, 
            @favouriteDriver, 
            @favouriteConstructor); 
            SELECT SCOPE_IDENTITY() as id;`);
            // Return the ID of the newly created user
            return result.recordset[0].id;
    } catch (error) {
        // Handle db errors
        throw error;
    }
};

// Find a user by email in the db
const findUserByEmail = async (email) => {
    try {
        // Get the db connection pool
        const pool = await poolPromise;

        // // Execute the sql query to find a user by email
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM users WHERE email = @email');

        // Returns the user object if found
        return result.recordset[0];  
    } catch (error) {
        // Handle db errors
        throw error;
    }
};

// Checks if a user exists in the database by email
const doesUserAlreadyExist = async (email) => {
    try {
        // Get the db connection pool
        const pool = await poolPromise; 

        // // Execute the sql query to count users with the provided email
        const result = await pool.request()
            .input('email', sql.VarChar(255), email) 
            .query('SELECT COUNT(*) AS count FROM users WHERE email = @email'); 
        
        // Return true if count > 0 otherwise false
        return result.recordset[0].count > 0; 
    } catch (error) {
        // Handle db errors
        throw error; 
    }
};

module.exports = {
    createUser,
    findUserByEmail,
    doesUserAlreadyExist
};
