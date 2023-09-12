// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

const villageSchema = new Schema({
    //name is a required string, trimmed to remove leading and trailing whitespace
    name: {
        type: String,
        required: [true, 'Village name required'],
        trim: true
    },

    zipcode: {
        type: Number,
        required: [true, 'Zipcode required'],
        // custom match for zipcode
        match: [/^\d{5}$/, 'Not a valid zipcode!'],
    },

    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Villager',
        required: true
    },

    //villagers associated w/ the village
    villagers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Villager'
        }
    ],

    // requests associated w/ the village
    requests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Request'
        }
    ],
})

//create a mongoose model named Village associated w/ the above schema
const Village = mongoose.model('Village', villageSchema);

//export the Village model
module.exports = Village; 