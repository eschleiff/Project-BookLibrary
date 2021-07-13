const Book = require('../models/books.model');
const { body, validationResult } = require('express-validator');

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

exports.book_detail = async (req, res, next) => {
    let book = await Book.findById(req.params.id)

    try {
        if (book!=null) {
            res.render('book_detail', { title: book.title, book })
        }
    } catch (error) {
        res.render('book_detail', { title: error})
    }
};

exports.book_create_get = (req, res, next) => {
    res.render('book_form', { title: "Create Book" });
};

exports.book_create_post = 
    body('title', 'Title must not be empty.').trim().isLength({ min: 1}).escape(),
    body('author', 'Author must not be empty.').trim().isLength({ min: 1}).escape(),
    body('summary', 'Summary must not be empty.').trim().isLength({ min: 1}).escape(),

    (req, res, next)  => {
        const errors = validationResult(req);

        let book = new Book({
            title: req.body.title,
            author: req.body.auther,
            summary: req.body.summary,
            pagesRead: req.body.pagesRead,
        });

        if (!errors.isEmpty()) {
            res.render('book_form', { title: 'Create Book', book, errors: errors.array() });
            return
        } else {
            book.save((err) => {
                if (err) { return next(err); }
                    res.redirect(book.url);
            });
        }

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