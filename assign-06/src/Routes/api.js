// src/Routes/api.js
const express = require('express');
const router = express.Router();

// Import your controllers
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
// Import other controllers...

// Define router paths
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

// Define paths for other controllers...

module.exports = router;
