// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// reference the id from the Villager model
const responseSchema = new Schema({
    claimId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Villager'
        }
    ]
});

//create a mongoose model named Response associated w/ the above schema
const Response = mongoose.model('Response', responseSchema);

//export the Response model
module.exports = Response;