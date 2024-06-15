const mongoose = require('mongoose');
require('dotenv').config();

const DBURI = process.env.DBURI;
const connectDb = async () => {
    try {
        await mongoose.connect(DBURI)
        console.log('Mongo db connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDb;