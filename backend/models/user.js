const { Schema, model } = require('mongoose');

const newuser = new Schema({
    fname : {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email : {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    password : {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = new model('User', newuser);  //Here 'User' is used because the collection name is 'users'
// That means the singular form of collection name, is used -- with first letter capital