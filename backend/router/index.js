const express = require("express");
const route = express.Router();
const authRouter = require("./auth");
const productRouter = require("./product");
route.use("/auth", authRouter);
route.use("/product", productRouter);

route.use((req, res) => {
  res.status(400).send({ message: "400 not found!" });
});

module.exports = route;
