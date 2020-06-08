'use strict'
const express = require('express');
const bodyParser = require('body-parser');
let User = require('./models/user')
const db = require("./database/index");
// const usercontroller = require('./controllers/user');

// init app
const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req,res)=>{
    res.send('Welcome to Team-granite Api')
});

app.post('/add', function(req, res){
    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.save(function(err){
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('saved############')
        }
    })
})


// listen on port 
app.listen(2000, function(){
    console.log("\n##############################")
    console.log('Server started on port 2000')
});

module.exports = app;
