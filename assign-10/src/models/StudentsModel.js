const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email:"string" ,
    firstName:"string" ,
    lastName:"string" ,
    mobile:"string" ,
    password:"string" ,
    address:"string" ,
    roll:"string" ,
    class:"string" ,
} , {versionKey: false});

module.exports = mongoose.model('students', studentSchema);