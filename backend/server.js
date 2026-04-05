const express = require("express");
const dbConfig = require("./dbConfig");
const route = require("./router");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");

dbConfig();
app.use(express.json());
app.use(cookieParser());
app.use(route);

app.listen(8000, () => {
  console.log("SERVER OK");
});
