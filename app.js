const express = require("express");
const cors = require("cors");

const africa = require("./Json/africa.json");
const north_america = require("./Json/north_america.json");
const south_america = require("./Json/south_america.json");

const logger = require("./logger/logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Home
app.get("/", (req, res) => {
  res.send("Welcome to the GeoStory API!");
});

// Africa
app.get("/Africa", (req, res) => {
  res.send(africa);
});

app.get("/Africa/Random", (req, res) => {
  const randIdx = Math.floor(Math.random() * africa.length);
  res.send(africa[randIdx]);
});

// North Americas
app.get("/North_Americas", (req, res) => {
  const randIdx = Math.floor(Math.random() * north_america.length);
  res.send(north_america[randIdx]);
});

app.get("/North_Americas/Random", (req, res) => {
  const randIdx = Math.floor(Math.random() * north_america.length);
  res.send(north_america[randIdx]);
});

// South Americas
app.get("South_Americas/", (req, res) => {
  const randIdx = Math.floor(Math.random() * south_america.length);
  res.send(south_america[randIdx]);
});
app.get("South_Americas/Random", (req, res) => {
  const randIdx = Math.floor(Math.random() * south_america.length);
  res.send(south_america[randIdx]);
});

module.exports = app;
