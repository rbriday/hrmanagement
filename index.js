require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("./config/dbConnection");
const { registrationController } = require("./controllers/authController");
const app = express();

app.use(express.json());
dbConnection();

app.post("/registration", registrationController);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
