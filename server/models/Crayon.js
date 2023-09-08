// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

const crayonSchema = new Schema({
    amount: {
        type: Number,
        min: 0,
        default: 0
    }
});

//create a mongoose model named Crayon associated w/ the above schema
const Crayon = mongoose.model('Crayon', crayonSchema);

//export the Crayon model
module.exports = Crayon;