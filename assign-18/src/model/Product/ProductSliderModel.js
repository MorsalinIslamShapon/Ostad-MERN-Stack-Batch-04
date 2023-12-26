const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    des: { type: String, required: true },
    price: { type: String, required: true },
    size: { type: String, required: true },
    img: { type: String, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
);

const productSliderModel = mongoose.model("productSliders", DataSchema);

module.exports = productSliderModel;