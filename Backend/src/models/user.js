const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        address: {type: String, default: ''},
        phoneNumber: {type: String, default: ''},
        cartItems: {type: Array, default: []},
        orders: {type: Array, default: []},
        avatar: {type: String, default:''}
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', User);