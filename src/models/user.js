let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema =  Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// let User = mongoose.model('User', userSchema);

// module.exports = {User};
let User = module.exports = mongoose
.model('User', userSchema);