const { CartService } = require("../services/CartListService");

exports.CartList = async (req , res)=>{
    let result =  await CartService(req);
    return res.status(200).json(result)
}