require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./database/db");
connectToDB();
const productRoute = require("./router/product-route");
const bookRoute = require("./router/book-route");

app.use(express.json());
app.use("/products", productRoute);
app.use("/reference", bookRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
