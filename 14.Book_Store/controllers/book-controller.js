const Book = require("../models/Book");

const getAllBooks=async(req,res)=>{
    try{
const allBooks=await Book.find({});
if(allBooks.length>0){
    res.status(200).json({
        success:true,
        message:"Books fetched successfully",
        books:allBooks
    });
}
else{
    res.status(404).json({
        success:false,
        message:"No books found"
    });
}
}
catch(e){
    res.status(500).json({
        success:false,
        message:"Failed to fetch books",
        error:e.message
    });
}

};
const getSingleBookByTitle=async(req,res)=>{
try{
const bookByTitle= await Book.findOne({title:req.params.title});
if(bookByTitle){
    res.status(200).json({
        success:true,
        message:"Book fetched successfully",
        book:bookByTitle
    });
}
else{
    res.status(404).json({
        success:false,
        message:"Book not found"
    });
}
}
catch(e){
    res.status(500).json({
        success:false,
        message:"Failed to fetch book",
        error:e.message
    });
}
};
const addNewBook=async(req,res)=>{
try{
const newBook=req.body; // Get the new book data from the request body
const newlyCreatedBook=await Book.create(newBook); // Create a new book in the database
if(newlyCreatedBook){
    res.status(201).json({
        success:true,
        message:"Book added successfully",
        book:newlyCreatedBook
    });
}
}
catch(e){
res.status(500).json({
    success:false,
    message:"Failed to add book",
    error:e.message
});
}
};
const updateBookByTitle=async(req,res)=>{
try{
    const updateBook=await Book.findOneAndUpdate(
       {title:req.params.title},
        req.body,
        {new:true} // Return the updated document
    );
    if(updateBook){
        res.status(200).json({
            success:true,
            message:"Book updated successfully",
            book:this.updateBookByTitle
        });
    }
    else{
        res.status(404).json({
            success:false,
            message:"Book not found"
        });
    }
}
catch(e){
    res.status(500).json({
        success:false,
        message:"Failed to update book",
        error:e.message
    });
}
};
const deleteBookByTitle=async(req,res)=>{
    try{
const deleteBook=await Book.findOneAndDelete({title:req.params.title});
if(deleteBook){
    res.status(200).json({
        success:true,
        message:"Book deleted successfully"
    });
    }
    else{
        res.status(404).json({
            success:false,
            message:"Book not found"
        });
    }
}
    catch(e){
        res.status(500).json({
            success:false,
            message:"Failed to delete book",
            error:e.message
        });
    }
}
module.exports={
    getAllBooks,
    getSingleBookByTitle,
    addNewBook,
    updateBookByTitle,
    deleteBookByTitle
};