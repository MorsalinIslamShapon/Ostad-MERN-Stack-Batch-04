const { worksModel } = require("../models/WorksModel");

exports.createWork = async (req, res) => {
    try{
        
        req.body.email = req.headers.email.email
        const result = await worksModel.create(req.body);
        if(result){
            res.status(200).json(result);
        }
        else{
            res.status(500).json({message:"filed to create work Data"});
        }
    }
    catch(er){
        res.status(500).json({message:er.message});
    }
}

exports.updateStatus = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await worksModel.updateOne({_id:id}, req.body);
        if(result){
            res.status(200).json({message:"updated successfully",data:result});
        }
        else{
            res.status(500).json({message:"update failed"});
        }
    }
    catch(err){
        res.status(500).json({message:er.message});
    }
}

exports.AllWorks = async (req, res) => {
    try{
     const result = await worksModel.find();
     if(result){
        res.status(200).json({message:'all data',data:result});
     }
     else{
        res.status(500).json({message:"filed to create work Data"});
     }   
    }
    catch(er){
        res.status(500).json({message:er.message});
    }
} 

exports.deleteWork = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await worksModel.deleteOne({_id:id});
        if(result){
            res.status(200).json({message:"deleted successfully",data:result});
        }
        else{
            res.status(500).json({message:"delete failed"});
        }
    }
    catch(err){
        res.status(500).json({message:er.message});
    }
}