const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connect to mongoose successfully");
  } catch (e) {
    console.error("Error while connecting to mongoose :", err);
    process.exit(1);
  }
};

module.exports = connectToDB;
