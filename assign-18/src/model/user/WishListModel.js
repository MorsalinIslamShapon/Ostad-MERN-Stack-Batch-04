const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, require: true },
    productId: { type: mongoose.Schema.Types.ObjectId, require: true },
  },
  { timestamps: true, versionKey: false }
);

const WishListModel = mongoose.model("wishes", DataSchema);
module.exports = WishListModel;
