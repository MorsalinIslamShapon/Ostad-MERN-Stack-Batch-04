const mongoose=require('mongoose')
const StudentDataSchema=mongoose.Schema(
    {
        firstName:{type:String,require},
        lastName:{type:String},
        gender:{type:String},
        dateOfBirth:{type:String },
        nationality:{type:String},
        address:{type:String},
        email:{type:String},
        phone:{type:String},
        admissionDate:{type:Date, default :Date.now()},
        courses:{type:String}
    },
    {timestamps:true,versionKey:false}
)
const StudentModel=mongoose.model('students',StudentDataSchema);
module.exports=StudentModel;
