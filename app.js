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
    //const id = req.params.id;
    const randAsia = Math.round(Math.random()*asia.length);
    res.send(asia[randAsia]);
})

////////////////////////////////////////////////////////////////////////////
app.get('/Europe',(req,res) => {
    res.send(europe)
})
app.get('/Europe/random', (req,res) => {
    //const id = req.params.id;
    const randEU = Math.round(Math.random()*europe.length);
    res.send(asia[randEU]);
})

module.exports =app;
