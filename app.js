const express = require("express");
const cors = require("cors");

const africa  = require("./Json/africa.json");
const north_america  = require("./Json/north_america.json");



const logger = require("./logger/logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);



app.get("/", (req, res) => {
    res.send("Welcome to the GeoStory API!");
  
  });

  app.get("/africa", (req, res ) => {
    res.send(africa);
  
  });

  app.get("/random/africa", (req, res) => {
    const randIdx = Math.floor(Math.random() * africa.length);
    res.send(africa[randIdx]);
   
  });
  app.get("/random/north_america", (req, res) => {
    const randIdx = Math.floor(Math.random() * north_america.length);
    res.send(north_america[randIdx]);
   
  });
  app.get("/random/africa:img",(req, res) => {
    const randIdx = forEach(el => el.params.img);
console.log(randIdx)
    //res.send(africa[randIdx]);
  })

module.exports = app;