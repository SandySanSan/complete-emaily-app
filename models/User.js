const mongoose = require('mongoose');
const { Schema } = mongoose; // destructuring mongoose

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 },
    name: String,
});

mongoose.model('users', userSchema); // loading schema into mongoose
