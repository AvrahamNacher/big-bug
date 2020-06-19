// const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: false
    },
    lastName: {
        type: String,
        trim: true,
        required: false
    },
    email: {
        type: String,
        minlength: 3,
        trim: true,
        unique: true,
        required: true
    },
    pwd: {
        type: String,
        minlength: 3,
        trim: false,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: false
    },
    landingPage: {
        type: String,
        trim: true,
        required: false
    }
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
