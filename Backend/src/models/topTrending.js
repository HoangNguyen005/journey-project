const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Trending = new Schema(
    {
        name: String,
        price: Number,
        images: String,
        slug: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Trending', Trending);
