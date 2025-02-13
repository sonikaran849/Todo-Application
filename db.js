//require('dotenv').config();
const mongoose = require("mongoose");

async function connectDB(){
    return mongoose.connect(process.env.mongodbUrl);
}

module.exports = connectDB;


