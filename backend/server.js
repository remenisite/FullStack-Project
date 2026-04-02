const express = require("express");
const cors = require("cors");
const dbConfig = require("./dbConfig");
const route = require("./router");
const port = 7070;
require("dotenv").config();

dbConfig();
const app = express();
app.use(express.json); //---------------------------- middleware
app.use(cors());
app.use(route);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server ok`);
});
