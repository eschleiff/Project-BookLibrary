const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pagesRead: Number,
    read: Boolean,
}, { timestamps: true }
);

bookSchema
    .virtual('url')
    .get(() => {
        return '/catalog//book' + this._id;
    });

const Book = mongoose.model('books', bookSchema);

module.exports = Book;