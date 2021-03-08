const express = require("express");
const route = express.Router();
const verifyToken = require("../../middlewares/verifyToken");

const registerUser = require("./register");
const loginUser = require("./login");
const userInfo = require("./userInfo");
const updateUser = require("./updateUser");
const passwordReset = require("./passwordReset");
const deleteUser = require("./deleteUser");

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/user", verifyToken, userInfo);
route.put("/user", verifyToken, updateUser);
route.delete("/user", verifyToken, deleteUser);
route.post("/password-reset", verifyToken, passwordReset);

module.exports = route;
