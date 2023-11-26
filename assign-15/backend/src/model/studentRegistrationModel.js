const mongoose = require("mongoose");

const studentRegistrationModel = mongoose.model("StudentSData", new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String},
    gender: { type: String},
    dateOfBirth: { type: String},
    nationality: { type: String},
    address: { type: String},
    email: { type: String},
    phone: { type: String},
    admissionDate: { type: String},
    courses: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { versionKey: false }));

module.exports = studentRegistrationModel;
