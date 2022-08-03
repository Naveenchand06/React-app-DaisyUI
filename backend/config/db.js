const mongoose = require("mongoose");
const color = require("colors");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Mongoose connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
