const express = require('express');

const server = express();
const mongoose = require('mongoose')

mongoose.connect()

server.use(express.json)


server.listen(3000,(req,res)=>{

        console.log('Online')

})