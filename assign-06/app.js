// app.js
const express = require('express');
const app = express();

// Set up routes 
const apiRoutes = require('./src/Routes/api');

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

module.exports = app;


// Middleware
app.use(express.json());

// Routes
module.exports = app;