const mongoose = require('mongoose');
const connect = async () => {
    try {
        // mongodb://127.0.0.1/journey_store
        await mongoose.connect(
            'mongodb+srv://admin:admin@yourney.1n00x7p.mongodb.net/'
        );
        // "mongodb+srv://admin:admin@cluster.mongodb.net/yourney?retryWrites=true&w=majority"
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.log('Connected failed');
        throw new Error(error);
    }
};

module.exports = { connect };
