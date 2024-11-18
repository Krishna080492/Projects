const userModel = require("../models/userSchema");
const jwt = require("jsonwebtoken")

const index = (req, res) => {
  return res.render("index")
}

const signup = (req, res) => {
  return res.render("signup");
}

const signupPage = async (req, res) => {
  try {
    let user = await userModel.create(req.body);
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.redirect("/signup");
  }
}

const login = (req, res) => {
  return res.render("login");
}

const loginPage = async (req, res) => {
  let { username, password } = req.body;
  try {
    let user = await userModel.findOne({ username })
    if (user) {
      if (user.password == password) {
        let payLoad = {
          username: user.username,
          email: user.email,
          phone: user.phone,
        }
        let token = jwt.sign(payLoad, "krishna");
        console.log(token);
        console.log("Login Successfully..");
        return res.cookie("token", token).redirect("/");
      } else {
        console.log("Password Invalid..");
        return res.redirect("/login");
      }
    } else {
      console.log("Username is Invalid..");
      return res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
    return res.redirect("/login");
  }
}

const logout = (req, res) => {
  req.logout((error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      return res.redirect("/login");
    }
  })
}
module.exports = { index, signup, signupPage, login, loginPage, logout }