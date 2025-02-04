const express = require('express');
const route = express.Router();

route.get('/flexLibrary',BooksControllers.books_index());






module.exports=route;