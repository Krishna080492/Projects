const { Router } = require("express");
const { signup, signupPage, index, login, loginPage, logout } = require("../controller/user.controller");
const { signUpAuth, isAuthJwt, isAuth } = require("../middleware/userAuth");

const u_router = Router();

u_router.get("/", isAuthJwt,  index);
u_router.get("/signup", signup);
u_router.post("/signup", signUpAuth, signupPage);
u_router.get("/login", login);
u_router.post("/login", loginPage);
u_router.get("/logout", logout);

module.exports = u_router;