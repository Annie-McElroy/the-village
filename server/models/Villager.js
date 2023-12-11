// import mongoose
const mongoose = require('mongoose');

// import crayon schema
const crayons = require('./Crayon')

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
        // match regex for email
        match: [/^[\w\d\.-]+@[\w\d]{2,}\.([a-z]{2,6})$/, 'Not a valid email address!'],
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
        type: String,
        required: [true, 'Zipcode required'],
        // match regex for zipcode
        match: [/\d{5}/, 'Not a valid zipcode!'],
    },


    //crayons associated w/ the villager
    crayons: [crayons],

    //requests associated w/ the villager
    requests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Request'
        }
    ],
    village: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Village'
    }
],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);

// setup pre-hook to hash password for insertMany
villagerSchema.pre('insertMany', async function(next, docs) {
    // console.log('insertMany pre hook triggered');
    // console.log(docs)
    if (Array.isArray(docs) && docs.length) {
        // console.log('if statement called')
        const saltRounds = 10;
        const hashedVillagers = docs.map(async (villager) => {
            const hashedPassword = await bcrypt.hash(villager.password, saltRounds);
            villager.password = hashedPassword
            // console.log('password salted');
            // console.log(villager)
            return villager;
        })
        const villagers = await Promise.all(hashedVillagers);

        return villagers;
    }
    
    next();
})

// set up pre-save middleware to create password
villagerSchema.pre('save', async function(next) {
    // console.log('pre hook triggered ');
    
    if (this.isNew || this.isModified('password')) {
        // console.log('if statement triggered');
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
        // console.log('password salted')
    }

    next();
});

// compare the incoming password with the hashed password
villagerSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

villagerSchema
    .virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    })
    .set(function (v) {
        const first = v.split(' ')[0];
        const last = v.split(' ')[1];
        this.set({ first, last})
    });

//create a mongoose model named Villager associated w/ the above schema
const Villager = mongoose.model('Villager', villagerSchema);

//export the Villager model
module.exports = Villager; 