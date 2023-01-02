const express = require("express");
const {
  getController,
  postController,
  deleteController,
  putController,
} = require("../controller/controller");
const route = express.Router();

route.get("/get", getController);
route.post("/post", postController);
route.delete("/delete/:id", deleteController);
route.put("/put/:id", putController);
module.exports = route;
