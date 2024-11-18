const { default: mongoose } = require("mongoose")

const db = async()=>{
  await mongoose.connect("mongodb://localhost:27017/examDB");
  console.log("Databse Connected Successfully..");
}

module.exports = db;