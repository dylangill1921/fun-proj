// Importing the required modules
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

// Initializing the express app
const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json());

// Defining the base route for user-related endpoints
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// The port the server will listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
