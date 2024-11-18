const { Router } = require("express");
const { index, signup, movieList, deleteData, getEditData, editData } = require("../controllers/movie.controller");
const { movieAuth } = require("../middleware/moive.middleware");

const router = Router();

router.get("/", index);
router.post("/signup",movieAuth, signup);
router.get("/movieList", movieList);
router.delete("/deleteData/:id", deleteData);
router.get('/editData', getEditData);
router.post("/editData/", movieAuth, editData);

module.exports = { router };

