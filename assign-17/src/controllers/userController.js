const userModel = require("../model/userModel")

exports.registerUser = async (req , res)=>{
    
    try{
        const result = await userModel.create(req.body)
        res.status(200).json({message:"user relisted successful" , data: result} )
    }
    catch(err){
        res.status(500).json({message:"got error" , error: err.message})
    }
};

exports.userInfoUpdate = async (req , res)=>{
    const id = req.params.ID
    try{
        const result = await userModel.updateOne( {_id:id}, req.body)
        res.status(200).json({message:"user data updated" , data: result} )
    }
    catch(err){
        res.status(500).json({message:"got error" , error: err.message})
    }
}; 

exports.deleteUserInfo = async (req , res)=>{
    const email = req.params.email
    
    try{
        const result = await userModel.deleteOne({email})
        res.status(200).json({message:"User data deleted" , data: result} )
    }
    catch(err){
        res.status(500).json({message:"got error" , error: err.message})
    }
};

exports.getUserInfoByEmail = async (req , res)=>{
    const email = req.params.email
    
    try{
        const result = await userModel.findOne({email})
        res.status(200).json({message:"User Data" , data: result} )
    }
    catch(err){
        res.status(500).json({message:"got error" , error: err.message})
    }
};
exports.getUsers = async (req , res)=>{
    const email = req.params.email
    
    try{
        const result = await userModel.find();
        res.status(200).json({message:"users" , data: result} )
    }
    catch(err){
        res.status(500).json({message:"got error" , error: err.message})
    }
};
