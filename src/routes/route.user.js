const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/controller.user");

UserRouter.get("/users", UserController.getUsers);

module.exports = UserRouter;
