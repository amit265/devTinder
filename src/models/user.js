const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 99
    },
    gender: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("User", userSchema);