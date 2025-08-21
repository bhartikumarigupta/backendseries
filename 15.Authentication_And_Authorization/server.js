require('dotenv').config();
const express=require('express');
const connectToDB=require('./database/db'); // Import the database connection function
// const authRoutes=require('./routes/routes'); // Import the authentication routes
connectToDB(); // Call the database connection function
const authRoutes=require('./routes/auth-routes'); // Import the authentication routes
const homeRoute=require('./routes/home-routes'); // Import the home routes
const adminRoutes=require('./routes/admin-routes'); // Import the admin routes
const imageRoutes=require('./routes/image-routes'); // Import the image routes
const app=express();
app.use(express.json()); // Middleware to parse JSON bodies
 app.use('/api/auth',authRoutes); // Use the authentication routes for any requests to /api/auth
app.use('/api/home',homeRoute); // Use the home routes for any requests to /api/home
app.use('/api/admin',adminRoutes); // Use the admin routes for any requests to /api/admin
app.use('/api/image', imageRoutes); // Use the image routes for any requests to /api/images
const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`Server is now running on http://localhost:${port}`); // Log the server URL 
});
