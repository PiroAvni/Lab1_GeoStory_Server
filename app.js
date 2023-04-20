const express = require("express");
const cors = require("cors");

const africa = require("./Json/africa.json");
const north_america = require("./Json/north_america.json");
const south_america = require("./Json/south_america.json");
const asia = require("./Json/asia.json");
const europe = require("./Json/europe.json");
const oceania = require("./Json/oceania.json");
const images = require("./Json/images.json");

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
app.get("/Africa/:", (req, res) => {
  !africa
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(africa);
});

app.get("/Africa/random", (req, res) => {
  console.log(req.params);
  const randAfrica = Math.floor(Math.random() * africa.length);
  console.log(randAfrica);

  !randAfrica === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(africa[randAfrica]);
});

// North Americas
app.get("/North_America", (req, res) => {
  !north_america === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(north_america);
});

app.get("/North_America/random", (req, res) => {
  const randNA = Math.floor(Math.random() * north_america.length);

  !randNA === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(north_america[randNA]);
});

// South Americas
app.get("/South_America/", (req, res) => {
  !south_america
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(south_america);
});

app.get("/South_America/random", (req, res) => {
  const randSA = Math.floor(Math.random() * south_america.length);
  !randSA === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(south_america[randSA]);
});

app.get("/Asia", (req, res) => {
  !asia
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(asia);
});
app.get("/Asia/random", (req, res) => {
  const randAsia = Math.floor(Math.random() * asia.length);
  !randAsia === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(asia[randAsia]);
});

////////////////////////////////////////////////////////////////////////////
app.get("/Europe", (req, res) => {
  !europe
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(europe);
});

app.get("/Europe/random", (req, res) => {
  const randEU = Math.floor(Math.random() * europe.length);

  !randEU === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(europe[randEU]);
});

//////////////////////////////////////////////////////////////////////////

app.get("/Oceania", (req, res) => {
  !oceania
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(oceania);
});

app.get("/Oceania/random", (req, res) => {
  const randOceania = Math.floor(Math.random() * oceania.length);

  !randOceania === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(oceania[randOceania]);
});

app.get("/images", (req, res) => {
  res.send(images);

});

module.exports = app;
