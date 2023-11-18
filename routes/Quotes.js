const express = require('express');
const router = express.Router();

// Get all Routes
router.get('/', (req, res) => {
    res.send("Get all routes");
});

// Create new quote
router.post('/new', (req, res) => {
    res.send('Create new quote');
});

module.exports = router;