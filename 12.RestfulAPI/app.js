const express = require('express');
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());// return middleware that only parse json and only looks at request where content - type header matches the type option
let books = [
    {
        id: 1,
        title: 'To Kill a Mockingbird',
    },
    {
        id: 2,
        title: '1984',
    },
    {
        id: 3,
        title: 'The Great Gatsby',
    }
    ,
    {
        id: 4,
        title: 'Pride and Prejudice',
    },
];
//intro route
app.get('/', (req, res) => {

    res.json({
        message: 'Welcome to the Book API! Use /books to access the book list.'
    });
});
// Get all books
app.get("/get", (req, res) => {
    res.json(books);
}
);
// Get a single book
/*
app.get('/get/:id', (req, res) => {
    //onst bookId = parseInt(req.params.id, 10);
    const book = books.find(item => item.book === req.params.id);

    if (book) {
        res.status(200).json(book);
    }
    else {
        res.status(404).json({ message: 'Book not found' });

    }

});
*/
app.get('/get/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
});
// post api add a new book
app.post('/add', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `Books ${books.length + 1}`,
    }
    books.push(newBook);
    res.status(201).json({
        message: 'Book added successfully',
        book: newBook
    });
});
// Update a book
app.put('/update/:id', (req, res) => {
    const findcurrentbook = books.find(index => index.id === parseInt(req.params.id, 10));
    if (findcurrentbook) {
        findcurrentbook.title = req.body.title || findcurrentbook.title;
        res.status(200).json({
            message: 'Book updated successfully',
            data: findcurrentbook
        });
    }
    else {
        return res.status(404).json({ message: 'Book not found' });
    }

});
// Delete a book
app.delete('/delete/:id', (req, res) => {
    const CurrbookId = parseInt(req.params.id, 10);
    const currentBook = books.findIndex(index => index.id === CurrbookId);
    if (currentBook == -1) {
        return res.status(404).json({
            message: 'Book not found'
        });
    }
    else {
        const deletedBook = books.splice(currentBook, 1);
        res.status(200).json({
            message: 'Book deleted successfully',
            data: deletedBook[0]
        });
    }



});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Get a book by ID


