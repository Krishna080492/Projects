const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/movies");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = db;