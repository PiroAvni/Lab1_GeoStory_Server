const express = require("express");
const cors = require("cors");

const africa  = require("./Json/africa.json");
const north_america  = require("./Json/north_america.json");



const logger = require("./logger/logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);



app.get("/", (req, res, next) => {
    res.send("Welcome to the GeoStory API!");
  
  });

  app.get("/africa", (req, res, next) => {
    res.send(africa);
  
  });

module.exports = app;