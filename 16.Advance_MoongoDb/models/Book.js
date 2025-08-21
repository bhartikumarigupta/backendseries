const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});
module.exports = mongoose.model("Book", BookSchema);
