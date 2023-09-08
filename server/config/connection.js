const mongoose = require('mongoose');
require('dotenv').config();

// Setup connection with URI hidden in .env file
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;