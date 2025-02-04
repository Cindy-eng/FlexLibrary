const Book = require('../Models/Books');

const books_index = (req,res)=>{
    Book.find().sort({createdAt:-1})
        .then((result) =>{
            res.render()
        })
        .catch(err =>{

        })
}

const book_details =(req,res)=>{
    const id = req.params.id;
    Book.findByid(id)
        .then(result=>{
            res.render()
        })
        .catch(err =>{

        })
}

module.exports ={
    books_index,
    book_details
}
