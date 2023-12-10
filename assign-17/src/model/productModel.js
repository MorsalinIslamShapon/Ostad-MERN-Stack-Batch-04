const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true, min: 1 },
    stock: { type: Number, required: true, min: 0, validate: Number.isInteger },
    category: { type: String, required: true },
    imageURL: { type: String },
}, { timestamps: true, versionKey: false });

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
