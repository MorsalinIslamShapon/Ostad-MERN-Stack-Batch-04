const productModel = require("../model/productModel")


exports.CreateProduct =async (req , res) =>{
    
    try{
        const result = await productModel.create(req.body)
        res.status(200).json({message:"product data created" , data: result} )
    }
    catch(err){
        res.status(200).json({message:"got error" , error: err.message})
    }
};
exports.UpdateProduct =async (req , res) =>{
    const ID = req.prams.ID 

    try{
        const result = await productModel.updateOne( ID, req.body)
        res.status(200).json({message:"product data updated" , data: result} )
    }
    catch(err){
        res.status(200).json({message:"got error" , error: err.message})
    }
};


exports.deleteProduct = async (req, res) => {
    const ID = req.params.ID;

 

    try {
        const result = await productModel.deleteOne({ _id: ID }); 
        res.status(200).json({ message: "product data removed", data: result });
    } catch (err) {
        res.status(500).json({ message: "got error", error: err.message }); 
    }
};

exports.readProduct =async (req , res) =>{
    
    try{
        const result = await productModel.find(req.body)
        res.status(200).json({message:"successful" , data: result} )
    }
    catch(err){
        res.status(200).json({message:"got error" , error: err.message})
    }
};