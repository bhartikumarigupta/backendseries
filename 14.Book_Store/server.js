require("dotenv").config(); // loads .env file containts into process.env
const express = require("express");
const connectToDB = require("./Database/db"); // Import the database connection function
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book-routes"); // Import the book routes
const app = express();
const port = process.env.port || 4000;
// connect to our database 
connectToDB();
// Middleware to parse JSON bodies
app.use(express.json()); //why we use this line? because we want to parse the JSON data sent in the request body
// Middleware to parse URL-encoded bodies
//Routes here
app.use("/api/books", bookRoutes); // Use the book routes for any requests to /books
app.listen(port, () => {
    console.log(`Server is now running on http://localhost:${port}`); // Log the server URL 

}



);


