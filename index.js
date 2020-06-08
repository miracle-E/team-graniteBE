'use strict'
const express = require('express');
const app = express();

// listen on port 
app.listen(2000, function(){
    console.log('Server started on port 2000')
});

module.exports = app;
