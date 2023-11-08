const mongoose  = require('mongoose');
const otpSchema = new mongoose.Schema({
    email:"string" ,
    otp:"string" ,
    status:"string" ,
}, {versionKey: false});

exports.otpModel = mongoose.model('Otp', otpSchema);