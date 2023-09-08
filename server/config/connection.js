const mongoose = require('mongoose');

// Setup connection with URI hidden in .env file
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;