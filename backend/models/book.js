const { Schema, model } = require('mongoose');

const newbook = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    }
})

module.exports = new model('Book', newbook); //Here 'Book' is used because the collection name is 'books'
// That means the singular form of collection name, is used -- with first letter capital