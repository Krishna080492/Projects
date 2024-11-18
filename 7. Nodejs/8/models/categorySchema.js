const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
  catname: String,
});

const catModel = mongoose.model("catTbl", categorySchema);

module.exports = catModel;