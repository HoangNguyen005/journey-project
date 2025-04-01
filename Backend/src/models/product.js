const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: String,
        price: Number,
        images: Array,
        slug: String,
        brand: String,
        des: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', Product);
