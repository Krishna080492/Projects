const movieInfo = require("../models/movie.schema");

const index = async (req, res) => {
  try {
    let data = await movieInfo.find();
    res.render("index", { data });
  } catch (error) {
    console.error(error);
  }
};

const signup = async (req, res) => {
  // console.log("Request Body:", req.body);
  // console.log("Request File:", req.file);
  try {
    const movieData = {
      image: req.file ? 'uploads/' + req.file.filename : '',
      name: req.body.name,
      dsc: req.body.dsc,
      date: req.body.date,
      genres: req.body.genres,
      rate: req.body.rate
    };
    await movieInfo.create(movieData);
    res.redirect("/movieList");
  } catch (error) {
    console.log(error);
  }
};

const movieList = async (req, res) => {
  try {
    let data = await movieInfo.find();
    res.render("movieList", { data });
  } catch (error) {
    console.error(error);
  }
};


const deleteData = async (req, res) => {
  let { id } = req.params;
  try {
    let data = await movieInfo.findByIdAndDelete(id);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const getEditData = async (req, res) => {
  try {
    let data = await movieInfo.findById(req.query.id);
    res.render('editData', { data });
  } catch (error) {
    console.log(error);
  }
};

const editData = async (req, res) => {
  // console.log("Request Body:", req.body);
  // console.log("Request File:", req.file);
  try {
    const updatedData = {
      image: req.file ? 'uploads/' + req.file.filename : req.body.image,
      name: req.body.name,
      dsc: req.body.dsc,
      date: req.body.date,
      genres: req.body.genres,
      rate: req.body.rate
    };
    await movieInfo.findByIdAndUpdate(req.body.id, updatedData);
    return res.redirect("/movieList");

  } catch (error) {
    console.log(error);
  }
};

module.exports = { index, signup, movieList, deleteData, getEditData, editData };
