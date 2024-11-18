const { error } = require("console");
const express = require("express");
const db = require("./config/database");
const bookDB = require("./models/bookTbl");


const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {

  bookDB.find({}).then((data) => {
    console.log("Data Inserted Successfully...");
    return res.render("form", { data });
  }).catch((error) => {
    console.log(error);
    return false;
  });
});

app.post("/insertData", (req, res) => {
  console.log(req.body);
  const { url, title, dsc, author, price } = req.body;

  bookDB.create({ url, title, dsc, author, price }).then((data) => {
    console.log("Data Successfully Inserted");
    return res.redirect("show");
  }).catch((error) => {
    console.log(error);
    return false;
  });
});

// cart-extra
app.get("/show", (req, res) => {

  bookDB.find({}).then((data) => {
    console.log("Data Inserted Successfully...");
    return res.render("show", { data });
  }).catch((error) => {
    console.log(error);
    return false;
  });
});

// delete
app.get("/deleteData", (req, res) => {
  let id = req.query.id;

  bookDB.findByIdAndDelete(id).then(() => {
    console.log("Data Deleted Successfully..");
    return res.redirect("show");
  }).catch((error) => {
    console.log(error);
    return false;
  });
});

// edit page - extra
app.get("/edit", (req, res) => {

  bookDB.find({}).then((data) => {
    return res.render("edit", { data });
  }).catch((error) => {
    console.log(error);
    return false;
  });
});

// edit data
app.get('/editData', (req, res) => {
  let id = req.query.id;
  bookDB.findById(id).then((data) => {
      return res.render('edit', { data });
  }).catch((error) => {
      console.log(error);
      return false;
  });
});
// update data
app.post('/editData', (req, res) => {
  const {id ,url, title, author, dsc, price } = req.body
 
  bookDB.findByIdAndUpdate(id,{url, title, author, dsc, price }).then((data)=>{
      console.log("Data Updated Successfully.");
      return res.redirect('show');
  }).catch((error)=>{
      console.log(error)
      return false;
  });
});

app.listen(port, (error) => {
  if (error) {
    console.log("Server isn't Started...");
    return false;
  } else {
    console.log("Server start at http://localhost:" + port);
  }
});