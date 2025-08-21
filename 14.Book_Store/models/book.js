const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the book title"],
        trim:true, // Remove whitespace from both ends of the string
        maxlength:[100,"Book title cannot exceed 100 characters"]
    },
    author:{
        type:String,
        required:[true,"Please enter the author name"],
        trim:true,
        maxlength:[100,"Author name cannot exceed 100 characters"]
    },
    publishedDate:{
        type:Date,
        required:[true,"Please enter the published date"],
        
    },
    price:{
        type:Number,
        required:[true,"Please enter the book price"],
        min:[0,"Book price cannot be negative"]
    }
    ,
    createdAt:{
        type:Date,
        default:Date.now // Automatically set the creation date to the current date
    }

});
module.exports=mongoose.model("Book",bookSchema); // Export the Book model based on the schema



