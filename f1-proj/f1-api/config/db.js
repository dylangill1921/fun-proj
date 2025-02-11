// config/db.js

// Import required modules
const sql = require('mssql');

// Load the environment variables fromt the .env file
require('dotenv').config();

// Configuration object for connecting to the 
// SQL server using environment variables this provides a layer of abstraction
// making it easier to manage sensitive info
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {  
        encrypt: true,
        trustServerCertificate: true
    }
};

// Create a connection pool using the configuration above
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => {
        console.error('Database Connection Failed! Bad Config: \n', err);
        process.exit(1);
    });

// Export the sql and poolPromise to be reused in this application
module.exports = {
    sql, 
    poolPromise
};
