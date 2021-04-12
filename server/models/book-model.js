const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        name: { type: String, required: true },
        numberOfPages: { type: Number, required: true }
    },
    { timestamps: true }
)
module.exports = mongoose.model('booksCollection', Book)