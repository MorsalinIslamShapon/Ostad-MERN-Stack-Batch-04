const mongoose = require('mongoose');

const worksSchema = new mongoose.Schema({
    title:"string" ,
    classNote:"string" ,
    description:"string" ,
    status:"string" ,
    email:"string" ,
}, {versionKey: false});

exports.worksModel = mongoose.model('works', worksSchema);