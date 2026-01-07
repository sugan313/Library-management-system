const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  publishedYear: Number,
  copiesAvailable: { type: Number, default: 1 }
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;