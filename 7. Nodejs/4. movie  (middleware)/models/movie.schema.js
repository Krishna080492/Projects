const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  image: String,
  name: String,
  dsc: String,
  date: String,
  genres: [String],
  rate: String
})

const movieInfo = mongoose.model("movieList", movieSchema);

module.exports = movieInfo;