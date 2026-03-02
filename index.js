require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Database connented");
});

app.get("/", (req, res) => {
  res.send("hello developres");
});

const port = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`server is running ${port}`);
});
