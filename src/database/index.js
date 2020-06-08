const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hng');

let db = mongoose.connection;

db.once('open',()=>{
    console.log('connected to Mongodb');
    console.log("##############################\n");
});

// check for db error
db.on('error', ()=>{
    console.log(err);
});

module.exports = db;