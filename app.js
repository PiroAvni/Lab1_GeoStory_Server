const express = require("express");
const cors = require("cors");

const africa = require("./Json/africa.json");
const north_america = require("./Json/north_america.json");
const south_america = require("./Json/south_america.json");
const asia = require("./Json/asia.json");
const europe = require("./Json/europe.json");
const oceania = require("./Json/oceania.json");

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

app.get("/Africa/random", (req, res) => {
  const randAfrica = Math.floor(Math.random() * africa.length);
  res.send(africa[randAfrica]);
});

// North Americas
app.get("/North_Americas", (req, res) => {
  res.send(north_america);
});

app.get("/North_Americas/random", (req, res) => {
  const randNA = Math.floor(Math.random() * north_america.length);
  res.send(north_america[randNA]);
});

// South Americas
app.get("South_Americas/", (req, res) => {
  res.send(south_america);
});
app.get("South_Americas/random", (req, res) => {
  const randSA = Math.floor(Math.random() * south_america.length);
  res.send(south_america[randSA]);
});

app.get("/Asia", (req, res) => {
  res.send(asia);
});
app.get("/Asia/random", (req, res) => {
  const randAsia = Math.floor(Math.random() * asia.length);
  res.send(asia[randAsia]);
});

////////////////////////////////////////////////////////////////////////////
app.get("/Europe", (req, res) => {
  res.send(europe);
});
app.get("/Europe/random", (req, res) => {
  const randEU = Math.floor(Math.random() * europe.length);
  res.send(europe[randEU]);
});

//////////////////////////////////////////////////////////////////////////

app.get("/Oceania", (req, res) => {
  res.send(oceania);
});
app.get("/Oceania/random", (req, res) => {
  const randOceania = Math.floor(Math.random() * oceania.length);
  res.send(oceania[randOceania]);
});

module.exports = app;
