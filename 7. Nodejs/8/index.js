const express = require("express");
const db = require("./config/examDB");
const u_router = require("./routers/user.router");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const { localAuth } = require("./middleware/userAuth");
const p_router = require("./routers/product.router");
const cat_router = require("./routers/category.router");


const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "private-key" }));

localAuth(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(u_router);
app.use(p_router);
app.use(cat_router);

app.listen(port, (error) => {
  db();
  if (!error) {
    console.log("Server start at:--- http://localhost:" + port);
  }
})