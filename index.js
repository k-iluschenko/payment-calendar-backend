require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
  res.status(200).json({message: 'Working'})
})

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
