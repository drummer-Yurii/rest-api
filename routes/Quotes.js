const express = require('express');
const router = express.Router();
const Quote = require('../models/Quotes');

// Get all Routes
router.get('/', async (req, res) => {
    const quotes = await Quote.find();

    res.json(quotes);
});

// Create new quote
router.post('/new', async (req, res) => {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.json(savedQuote);
});

module.exports = router;