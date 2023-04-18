const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json())
//////////////////////////////////
const asia = require('./asia.json');
const europe = require('./europe.json');
const oceania = require('./oceania.json');


app.get('/',(req,res) => {
    res.send("Nicole tried")
})

/////////////////////////////////////////////////////////////////////////
//Asia

app.get('/Asia',(req,res) => {
    res.send(asia)
})
app.get('/Asia/random', (req,res) => {
    const randAsia = Math.floor(Math.random()*asia.length);
    res.send(asia[randAsia]);
})

////////////////////////////////////////////////////////////////////////////
app.get('/Europe',(req,res) => {
    res.send(europe)
})
app.get('/Europe/random', (req,res) => {
    const randEU = Math.floor(Math.random()*europe.length);
    res.send(europe[randEU]);
})

//////////////////////////////////////////////////////////////////////////

app.get('/Oceania',(req,res) => {
    res.send(oceania)
})
app.get('/Oceania/random', (req,res) => {
    const randOceania = Math.floor(Math.random()*oceania.length);
    res.send(oceania[randOceania]);
})


module.exports =app;
