const express = require("express");
const {
  createAuthor,
  createBook,
  getBookWithAuthor,
} = require("../controller/book-controller");
const router = express.Router();
router.post("/book", createBook);
router.post("/author", createAuthor);
router.get("/getBook/:id", getBookWithAuthor);
module.exports = router;
