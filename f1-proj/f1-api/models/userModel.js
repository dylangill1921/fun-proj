// models/userModels.js
const {sql, poolPromise} = require('../config/db');

const createUser = async (userData) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
        .input('firstName', sql.VarChar, userData.firstName)
        .input('lastName', sql.VarChar, userData.lastName)
        // add all parameters here
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
            return result.recordset[0].id;
    } catch (error) {
        throw error;
    }
};

const findUserByEmail = async (email) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM users WHERE email = @email');
        return result.recordset[0];  // Returns the user object if found
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUser,
    findUserByEmail
};
