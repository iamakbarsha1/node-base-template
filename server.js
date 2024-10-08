const express = require("express");
const app = express();
require("dotenv").config();

const { connectToDB } = require("./db/db");

const PORT = process.env.PORT || 3000;

connectToDB();

app.listen(PORT, (res, err) => {
  if (err) return console.log("Server down: " + err);
  else return console.log("Server up!");
});
