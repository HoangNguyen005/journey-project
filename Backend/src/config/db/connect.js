const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/journey_store');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.log('Connected failed')
        throw new Error(error);
    }
}

module.exports = { connect }