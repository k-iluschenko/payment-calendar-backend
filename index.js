require("dotenv").config();
const express = require("express");
const sequelize = require("./db");

const PORT = process.env.PORT;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    app.listen(PORT, () => console.log(PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
