const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {type: String, required: true},
    author:{ type: String, required: true},
    isbn: {type: String, required: true, unique: true},
    publishedDate: {Date},
    inStock: Boolean
})

const Book = mongoose.model("Book",bookSchema)
module.exports = Book