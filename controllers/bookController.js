var Book = require('../models/books.model');

exports.index = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.book_list = (req, res, next) => {
    res.send('NOT IMPLEMENTED');
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