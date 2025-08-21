const express=require("express");
//create express router
// This router will handle the routes related to books
const { getAllBooks,
    getSingleBookByTitle,
    addNewBook,
    updateSingleBook,
    deleteSingleBook,
    deleteBookByTitle,
    updateBookByTitle} = require("../controllers/book-controller"); // Import the book controller functions
const router=express.Router();
// all that are related to books only 
router.get("/get",getAllBooks); // Route to get all books
router.get("/get/:title",getSingleBookByTitle);
router.post("/add",addNewBook);
router.put("/update/:title",updateBookByTitle);
router.delete("/delete/:title",deleteBookByTitle);
module.exports=router; // Export the router so it can be used in other files