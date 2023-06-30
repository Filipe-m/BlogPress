const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const connection = require("./database/database");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.render("index");
});

connection
  .authenticate()
  .then(() => {
    console.log("Database connection done!");
  })
  .catch((e) => console.log(e));

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
