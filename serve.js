// const express = require('express');
// const path = require('path');
// const server = express();
// const mongoose = require('mongoose')
// const url = 'mongodb+srv://Admin_Cindy:Node12345.@clusterblog.yfn62.mongodb.net/library?retryWrites=true&w=majority&appName=ClusterBlog'
// const routes = require('./routes/routes');
// const cors = require('cors');
//
//  // mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
//  //     .then((result) =>{
//  //         server.listen(3000)
//  //         console.log('Servidor rodando mmm em http://localhost:3000')
//  //     })
//  //     .catch((err)=> console.log('erro de conecao',err));
// server.listen(3000)
//
// server.use(express.json)
// //server.use(cors());
// server.use('/books',routes);
// server.use((req,res) =>{
//     res.status(404)
//         .then(result =>{
//             console.log('hghhh')
//         })
// });


// server.get('/books', (req, res) => {
//
// });




const express = require('express');
const mongoose = require('mongoose')
const url = 'mongodb+srv://Admin_Cindy:Node12345.@clusterblog.yfn62.mongodb.net/library?retryWrites=true&w=majority&appName=ClusterBlog'
const cors = require('cors');
const routes = require('./routes/routes')

const server = express();


mongoose.connect(url, { useNewUrlParser: true })
    .then(() => server.listen(3000, () => {
        console.log('Servidor está rodando na porta 3000');
    }))
    .catch((err) => console.log('Erro de conexão', err));

server.use(cors());
server.use(routes);
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Servidor está rodando!nnnnn');
});