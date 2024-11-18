const { Router } = require("express");
const { category, addCategory } = require("../controller/category.controller");
const { isAuth } = require("../middleware/userAuth");


const cat_router = Router();

cat_router.get("/category", category);
cat_router.post("/category", isAuth, addCategory);


module.exports = cat_router;