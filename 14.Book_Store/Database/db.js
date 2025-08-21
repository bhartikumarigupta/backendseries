const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        const uri = process.env.uri; // Use the URI from environment variables or default to localhost
        await mongoose.connect(uri,
        );
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit the process with a failure code
    }


};
module.exports = connectToDB; // Export the connectToDB function for use in other files
// This function can be called in your main application file to establish the database connection
