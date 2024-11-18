const passport = require("passport");
const userModel = require("../models/userSchema");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");

const signUpAuth = (req, res, next) => {
  let { username, email, password, phone } = req.body;
  if (username && email && password && phone) {
    return next();
  } else {
    console.log("All fields are required.");
    return res.redirect("/signup")
  }
}

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    console.log("Login Error");
    return res.redirect("/login");
  }
}

const isAuthJwt = (req, res, next) => {
  let { token } = req.cookies;
  if (token) {
    next();
  } else {
    return res.redirect("/login");
  }
}

const localAuth = (passport) => {
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      let user = await userModel.findOne({ username });
      if (!user) {
        return done(null, false);
      }
      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      let user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error)
    }
  })
}
module.exports = { signUpAuth, isAuth, localAuth, isAuthJwt }