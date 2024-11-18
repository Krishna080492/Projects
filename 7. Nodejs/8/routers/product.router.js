const { Router } = require("express");
const { index, productPage, cart, deleteProduct, getProductPage, updateProduct, product } = require("../controller/product.controller");
const { isAuth } = require("../middleware/userAuth");

const p_router = Router();

p_router.get("/",isAuth, index);
p_router.get("/product", product);
p_router.post("/product",isAuth, productPage);
p_router.get("/cart",isAuth, cart);
p_router.get("/delete/:id", deleteProduct);
p_router.get("/update/:id", getProductPage);
p_router.post("/update/:id", updateProduct);

module.exports = p_router;