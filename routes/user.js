const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

router.get("/users", userController.getUser);
router.post("/users/register", userController.createUser);
router.post("/users/login", userController.loginUser);

module.exports = router;
