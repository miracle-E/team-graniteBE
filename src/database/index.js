const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hng');

let db = mongoose.connection;
try {
    db.once('open',()=>{
        console.log('connected to Mongodb');
        console.log("##############################\n");
    });
} catch (error) {
    console.error('Mongodb connection error!');
    console.log("##############################\n");
}


// check for db error
db.on('error', (err)=>{
    console.error('Mongodb: ', err);
    console.log("##############################\n");
});

module.exports = db;