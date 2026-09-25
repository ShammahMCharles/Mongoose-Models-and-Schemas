//DNS CONNECTION FIX
const dns = require('dns');
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
require('./db/connection')
const PORT = process.env.PORT;





//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.json())


const BooksRouters = require("./routes/booksRoutes")
app.use("/books", BooksRouters)

 // PORT
app.listen(PORT, ()=>{
    console.log(`Sever is running on port: http://localhost:${PORT}`)
})