const { error } = require("console");
const express = require("express");
const db = require("./config/blogDatabase");
const { router } = require("./routers/blog.routes");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const { localAuth } = require("./middleware/blogAuth");

const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "private-key" }));

localAuth(passport);

app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.listen(port, (error) => {
  db();
  if (!error) {
    console.log("Server Start at:- http://localhost:" + port);
  }
})