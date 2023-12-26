const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, require: true },
    productId: { type: mongoose.Schema.Types.ObjectId, require: true },
    color: { type: String , require: true},
    price: { type: String , require: true},
    qty: { type: String ,require: true},
    size: { type: String , require: true},
  },
  { timestamps: true, versionKey: false }
);

const CartModel = mongoose.model("carts", DataSchema);
module.exports = CartModel;