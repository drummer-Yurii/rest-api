const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Database
mongoose.connect('mongodb://localhost/motivation');

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connecting to MongoDB database...');
})

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Starting server
app.listen(3000, console.log('Listening on port 3000'));
