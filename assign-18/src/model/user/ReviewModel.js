const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, require: true },
    userID: { type: mongoose.Schema.Types.ObjectId, require: true },
    des: { type: String, require: true },
    rating: { type: String, require: true },
    
  },
  { timestamps: true, versionKey: false }
);

const ReviewModel = mongoose.model("reviews", DataSchema);
module.exports = ReviewModel;
