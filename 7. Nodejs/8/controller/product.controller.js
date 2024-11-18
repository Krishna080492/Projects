const catModel = require("../models/categorySchema");
const productModel = require("../models/productSchema");


const index = (req, res) => {
  return res.render("index");
}

const product = async (req, res) => {
  try {
    let product = await productModel.find();
    let cat = await catModel.find();
    return res.render("product", { product, cat });
  } catch (error) {
    console.log(error);
  }
}

const productPage = async (req, res) => {
  try {
    await productModel.create(req.body);
    return res.redirect("/cart");
  } catch (error) {
    console.log(error);
    return res.redirect("/product");
  }
}

const cart = async (req, res) => {
  try {
    let product = await productModel.find().populate("catId");
    return res.render("cart", { product });
  } catch (error) {
    console.log(error);
  }
}

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    await productModel.findByIdAndDelete(id);
    return res.redirect("/cart");
  } catch (error) {
    console.log(error);
  }
}

const updateProduct = async (req, res) => {
  try {
    let { id } = req.params;
    await productModel.findByIdAndUpdate(id, req.body);
    return res.redirect("/cart")
  } catch (error) {
    console.log(error);
    res.redirect("/editproduct");
  }
}

const getProductPage = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id).populate("catId");
    const cat = await catModel.find();
    res.render("editproduct", { product, cat });
  } catch (error) {
    console.log(error);
    res.redirect("/cart");
  }
};

module.exports = { index, product, productPage, cart, deleteProduct, updateProduct, getProductPage }