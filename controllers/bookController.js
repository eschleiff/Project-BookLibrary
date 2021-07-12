var Book = require('../models/books.model');

exports.index = async (req, res, next) => {

    try {
        let bookCount = await Book.countDocuments({});
        res.render('index', { title: 'Local Library Home', data: bookCount });
    } catch (error) {
        res.render('index', { title: 'Local Library Home', error, bookCount });
    }

};

exports.book_list = async (req, res, next) => {
    let bookList = await Book.find({}).lean()

    res.render('book_list', { title: 'Book List', bookList });
};

exports.book_detail = (req, res, next) => {
    res.send('NOT IMPLEMENTED');
};

exports.book_create_get = (req, res, next) => {
    res.send('NOT IMPLEMENTED');
};

exports.book_create_post = (req, res)  => {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update POST');
};