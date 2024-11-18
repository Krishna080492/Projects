const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  pname:String,
  pimage:String,
  pdsc:String,
  pprice:Number,
  catId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"catTbl",
  },
});

const productModel = mongoose.model("productTbl", productSchema);

module.exports = productModel;