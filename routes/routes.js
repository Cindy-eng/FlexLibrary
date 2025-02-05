const express = require('express');
const route = express.Router();
const BooksControllers= require('../Controllers/BooksControllers')


route.get('/flexLibrary',BooksControllers.books_index);
route.get('/',(req,res)=>{
    res.sendFile('views/books.html')
})
route.get('/',(req,res)=>{
    res.redirect('views/books.html')
})






module.exports=route;