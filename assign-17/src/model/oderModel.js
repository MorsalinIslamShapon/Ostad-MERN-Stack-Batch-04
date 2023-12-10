const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({
  product: { type: mongoose.Schema.ObjectId, ref: "products", required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "users", required: true },
  items: [orderItemSchema], 
  totalAmount: { type: Number, required: true, min: 0 },
  shippingAddress: { type: String, required: true },
  status: { type: String, required: true, default: "Pending" },
},  { timestamps: true, versionKey: false });

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = OrderModel;
