const mongoose=require('mongoose');
const connectToDB=async()=>{
    try{
await mongoose.connect(process.env.URI);
console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit the process with a failure code
    }

};
module.exports=connectToDB; // Export the connectToDB function for use in other files
