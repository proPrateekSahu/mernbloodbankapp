const mongoose = require('mongoose');
const colors = require('colors');
require('../models/userModel');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // console.log(
    //   `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
    //     .white
    // );
  } catch (errror) {
    // console.log(`Mongodb Error ${error}`.bgRed.white);
  }
};

module.exports = { connectDB, mongoose };
