'use strict'
const express = require('express');
const bodyParser = require('body-parser');
let User = require('./models/user')
const db = require("./database/index");

// init app
const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req,res)=>{
    res.send('Welcome to Team-granite Api')
});

// listen on port 
app.listen(2000, function(){
    console.log("\n##############################")
    console.log('Server started on port 2000')
});

module.exports = app;
