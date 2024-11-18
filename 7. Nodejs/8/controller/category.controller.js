const catModel = require("../models/categorySchema");

const category = (req, res) => {
  return res.render("category")
}

const addCategory = async (req, res) => {
  try {
    let cat = await catModel.create(req.body);
    return res.redirect("/product");
  } catch (error) {
    console.log(error);
    return res.redirect("/category")
  }
}

// const updateCatData = async(req,res)=>{
//   let { id } = req.params;
//   try {
//     let cat = await catModel.findByIdAndUpdate(id);
//     res.redirect();
//   } catch (error) {
//     res.send(error)
//   }
// }

// const getCatData = async (req, res) => {
//   try {
//     let catData = await catModel.find()
//     res.send(catData);
//   } catch (error) {
//     res.send(error)
//   }
// }
module.exports = { category, addCategory}