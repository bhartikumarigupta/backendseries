const Author = require("../models/Author");
const Book = require("../models/Book");
const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    if (!author) {
      console.log("no author created");
      res.status(400).json({
        success: false,
        message: "No author created",
      });
    } else {
      console.log("no author created");
      res.status(200).json({
        success: true,
        message: "author created",
        data: author,
      });
    }
  } catch (e) {
    console.log("error while creatingAuthor:", e);
    res.status(500).json({
      success: false,
      message: "error while creatingAuthor ",
    });
  }
};
const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    if (!book) {
      console.log("no book posted");
      res.status(400).json({
        success: false,
        message: "No book posted",
      });
    } else {
      console.log(" book posted");
      res.status(200).json({
        success: true,
        message: "book posted ",
        data: book,
      });
    }
  } catch (e) {
    console.log("error while posting book:", e);
    res.status(500).json({
      success: false,
      message: "error while posting book",
    });
  }
};
const getBookWithAuthor = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Something wrong while fetching book with author",
      });
    }
    res.status(200).json({
      success: true,
      message: "successfully fetched book with author",
      data: book,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error while fetching book with author",
    });
  }
};
module.exports = {
  createAuthor,
  createBook,
  getBookWithAuthor,
};
