const mongoose = require('mongoose')
const {Schema} = mongoose

const booksSchema = new Schema ({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

module.exports = mongoose.model('Book', booksSchema)