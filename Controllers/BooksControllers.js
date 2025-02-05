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
    Book.findById(id)
        .then(result=>{
            res.render()
        })
        .catch(err =>{

        })
}

const book_create =(req,res)=>{
    const book = new Book(req.body);
    book.save()
        .then((result) =>{

        })
        .catch((err) =>{

        })

}

const book_getForm=(req,res)=>{
    res.render()
}


const book_remove =(req,res)=>{
    const id = req.params.id
    Book.findByIdAndDelete(id)
        .then((result) =>{

        })
        .catch((err)=>{

        })
}

module.exports ={
    books_index,
    book_details
}
