const express = require("express");
const db = require("./config/database");
const { router } = require("./routers/movie.router");
const path = require("path");

const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(router);

app.listen(port, (error) => {
  db();
  if (!error) {
    console.log("Server Start at:- http://localhost:" + port);
  }
})