const WishModel = require("../model/WishModel");

const WishListService = async (req) => {
  try {
    
    let data = await WishModel.find({});
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", message: err.message };
  }
};
const SaveWishListService = async (req) => {
   
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    let data = await WishModel.updateOne(
      reqBody,
      { $set: reqBody },
      { upsert: true }
    );

    return { status: "success", message: "wish list saved"  , data:data};
  } catch (err) {
    return { status: "fail", message: err.message };
  }
};
const RemoveWishListService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userId = user_id;
    
        let data = await WishModel.deleteOne(reqBody);
    
        return { status: "success", message: "item removed" };
      } catch (err) {
        return { status: "fail", message: err.message };
      }
};

module.exports = {
  WishListService,
 SaveWishListService,
  RemoveWishListService,
};
