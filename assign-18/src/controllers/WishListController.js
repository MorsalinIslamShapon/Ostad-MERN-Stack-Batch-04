const {
  WishListService,
  SaveWishListService,
  RemoveWishListService,
} = require("../services/WishListService");

exports.WistList = async (req , res)=>{
    let result =  await WishListService(req);
    return res.status(200).json(result)
}
exports.SaveWistList = async (req , res)=>{
    let result =  await SaveWishListService(req);
    return res.status(200).json(result)
}
exports.RemoveWistList = async (req , res)=>{
    let result =  await RemoveWishListService(req);
    return res.status(200).json(result)
}