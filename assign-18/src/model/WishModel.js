const mongoose = require('mongoose') ;

const DataSchema =  mongoose.Schema({
    ProductID:{type:mongoose.Schema.Types.ObjectId , required:true},
    userID:{type:mongoose.Schema.Types.ObjectId , required:true},
} , {timestamp :true , versionKey : false});

const WishModel = mongoose.model('wishes' , DataSchema);
module.exports = WishModel