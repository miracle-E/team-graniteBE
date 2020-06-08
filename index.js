'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/hng');
let User = require('./models/user')

let db = mongoose.connection;

db.once('open',()=>{
    console.log('connected to Mongodb');
});

// check for db error
db.on('error', ()=>{
    console.log(err);
});

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
    console.log('Server started on port 2000')
});

module.exports = app;
