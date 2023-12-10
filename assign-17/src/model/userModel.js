const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, default: null },
    phoneNumber: { type: String, default: null },
}, { timestamps: true, versionKey: false });

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
