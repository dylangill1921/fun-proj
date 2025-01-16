// Importing the required modules
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

// Initializing the express app
const app = express();

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Defining the base route for user-related endpoints
app.use('/api/users', userRoutes);

// The port the server will listen on
const PORT = process.env.PORT || 3000;

// Listens for incoming requests on the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
