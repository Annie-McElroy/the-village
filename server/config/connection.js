const mongoose = require('mongoose');
require('dotenv').config();

// Setup connection with URI hidden in .env file
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.kauqu1v.mongodb.net/the-village');

module.exports = mongoose.connection;