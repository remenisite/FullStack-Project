const express = require("express");
const dbConfig = require("./dbConfig");
const route = require("./router");
require("dotenv").config();
const app = express();

app.use(express.json());
dbConfig();
app.use(route);
app.listen(8000, () => {
  console.log("SERVER OK");
});
