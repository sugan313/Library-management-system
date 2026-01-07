const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookroutes");
 

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);
 

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/libraryDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


