const express = require('express');

const server = express();
const mongoose = require('mongoose')
const url = "mongodb+srv://Admin_Cindy:Node12345.@clusterblog.yfn62.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBlog"

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err)=> console.log('erro de conecao',err));

server.use(express.json)


server.listen(3000,(req,res)=>{

        console.log('Online')

})