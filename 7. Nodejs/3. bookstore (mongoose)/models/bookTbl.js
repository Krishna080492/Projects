const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  dsc: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const bookDB = mongoose.model("bookTbl", bookSchema);

module.exports = bookDB;