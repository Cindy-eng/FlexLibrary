const express = require('express');
const path = require('path');
const server = express();
const mongoose = require('mongoose')
const url = "mongodb+srv://Admin_Cindy:Node12345.@clusterblog.yfn62.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBlog"
const routes = require('./routes/routes');
const cors = require('cors');

 mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
     .then((result) =>{
             server.listen(3000)
         console.log('Servidor rodando mmm em http://localhost:3000')
     })
     .catch((err)=> console.log('erro de conecao',err));

server.use(express.json)
server.use(routes);
server.use(cors());

server.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'books.html'));
});




// const express = require('express');
// const path = require('path');
// const cors = require('cors');
//
// const server = express();
// server.use(cors());
// server.use(express.json());
//
// server.get('/', (req, res) => {
//     res.send('Servidor está rodando!');
// });
//
// server.listen(3000, () => {
//     console.log('Servidor rodando em http://localhost:3000');
// });