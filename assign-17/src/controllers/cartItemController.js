const cartItemModel = require("../model/cartItemModel");

exports.addProduct =async (req , res) =>{
    
    try{
        const result = await cartItemModel.create(req.body)
        res.status(200).json({message:"Item Added to cart" , data: result} )
    }
    catch(err){
        res.status(500).json({message:"got error" , error: err.message})
    }
};

exports.updateCartProduct =async (req , res) =>{
    const Id = req.params.ID  
    try{
        const result = await cartItemModel.updateOne( {_id:Id}  , req.body)
        res.status(200).json({message:"Cart data updated" , data: result} )
    }
    catch(err){
        res.status(200).json({message:"got error" , error: err.message})
    }
};

exports.removeProduct = async (req , res) =>{
    const ID = req.params.ID
    try{
        const result = await cartItemModel.deleteOne({ _id: ID })
        res.status(200).json({message:"data deleted" , data: result} )
    }
    catch(err){
        res.status(200).json({message:"got error" , error: err.message})
    }
};

exports.cartProduct =async (req , res) =>{
    
    try{
        const result = await cartItemModel.find()
        res.status(200).json({message:"successful" , data: result} )
    }
    catch(err){
        res.status(200).json({message:"got error" , error: err.message})
    }
};