const { error, log } = require("console");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookData");

const db = mongoose.connection;

db.on("connected", (error)=>{
  if(error){
    console.log("Database Can't be connected");
    return false;
  } else {
    console.log("Database Connected Successfully.");
  }
})