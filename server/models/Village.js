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
        // custom validator for zipcode
        validate: {
            validator: function(v) {
                return /^\d{5}$/.test(v);
            },
            // returns error message on invalid zip
            message: props => `${props.value} is not a valid zip code!`
        },
    },

    //villagers associated w/ the village
    villagers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Villager'
        }
    ]
})

//create a mongoose model named Village associated w/ the above schema
const Village = mongoose.model('Village', villageSchema);

//export the village model
module.exports = Village; 