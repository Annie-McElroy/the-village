// import mongoose
const mongoose = require('mongoose');

// import moment for timestamp
const moment = require('moment');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// import Response schema
const response = require('./Response')

// mongoose Schema constructor for request
const requestSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    body: {
        type: String,
        required: true,
        trim: true
    },

    crayons: {
        type: Number,
        required: true,
    },

    authorId: {
        type: Number,
        required: true,
    },

    villageId: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMMM DD YYYY, h:mm:ss a')
    },

    isComplete: {
        type: Boolean,
        required: true
    },

    isClaimed: {
        type: Boolean,
        required: true
    },

    //comments associated w/ the request
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comments'
        }
    ],

    //response associated w/ the request
    response: response
},
{
    toJSON: {
        getter: true,
    },
    id: false,
}
)

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;