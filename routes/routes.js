const express = require('express');
const route = express.Router();
const BooksControllers= require('../Controllers/BooksControllers')


route.get('/flexLibrary',BooksControllers.books_index );
route.get('/',(req,res)=>{
    res.sendFile('views/books.html')
})
route.get('/book',(req,res)=>{
res.send('Oiiii bbbbbbbbbb')
})

route.post('/create',BooksControllers.book_create);
route.get('/flexLibrary/book/:id',BooksControllers.book_details)






module.exports=route;