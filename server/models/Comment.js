// import mongoose
const mongoose = require('mongoose');

// import moment for timestamp
const moment = require('moment');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// Schema constructor for comment
const commentSchema = new Schema({
    body: {
        type: String,
        required: true,
        trim: true
    },

    authorID: {
        type: Number,
        required: true,
    },

    requestID: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMMM DD YYYY, h:mm:ss a')
    }
},
{
    toJSON: {
        getter: true,
    },
    id: false,
}
);

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;