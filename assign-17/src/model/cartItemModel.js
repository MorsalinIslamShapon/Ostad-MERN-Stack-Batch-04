const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, required: true },
  product: { type: mongoose.Schema.ObjectId, required: true },
  quantity: { type: Number, required: true, min: 1 },
} ,{ timestamps: true, versionKey: false });

const cartItemModel = mongoose.model("cartItems", cartItemSchema);
module.exports = cartItemModel;
