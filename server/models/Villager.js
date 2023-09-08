// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

const bcrypt = require('bcrypt');

const villagerSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // custom validator for email
        validate: {
            validator: function(v) {
                return /^[\w\d\.-]+@[\w\d]{2,}\.([a-z]{2,6})$/.test(v);
            },
            // returns error message on invalid email
            message: props => `${props.value} is not a valid email address!`
        },
    },

    //minimum password length is 8 characters. Hashed below.
    password: {
        type: String,
        required: true,
        minlength: 8
    },

    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    zipcode: {
        type: Number,
        required: [true, 'Zipcode required']
    },

    // custom validator for zipcode
    validate: {
        validator: function(v) {
            return /\d{5}/.test(v);
        },
        // returns error message on invalid zip
        message: props => `${props.value} is not a valid zip code!`
    },

    //crayons associated w/ the villager
    crayons: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Crayon'
        }
    ],

    //requests associated w/ the villager
    requests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Request'
        }
    ],

});

// set up pre-save middleware to create password
villagerSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 15;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
villagerSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

//create a mongoose model named Villager associated w/ the above schema
const Villager = mongoose.model('Villager', villagerSchema);

//export the village model
module.exports = Villager; 