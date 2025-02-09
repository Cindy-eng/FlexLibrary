const Books = require('../Models/Books');

const books_index = (req,res)=>{
    Books.find().sort({createdAt:-1})
        .then((result) =>{
            res.status(200).json({ message: 'Lista de livro com sucesso', data: result });
        })
        .catch(err =>{

        })
}

const book_details =(req,res)=>{
    const id = req.params.id;
    Books.findById(id)
        .then(result=>{
            res.status(201).json({ message: 'Lista com id', data: result });
        })
        .catch(err =>{

        })
}

const book_create =(req,res)=>{
    //const book = new Books(req.body);
    const book = new Books({
        title: 'Wolf',
        autor: 'Auto',
        cover: null,
        description: 'Descrição de teste'
    });

    book.save()
        .then((result) =>{
            res.status(201).json({ message: 'Livro criado com sucesso' });

        })
        .catch((err) =>{
            console.error('Erro ao salvar o livro:', err);
            res.status(500).json({ error: 'Erro ao salvar o livro', details: err.message });

        })

}

const book_getForm=(req,res)=>{
    res.render()
}


const book_remove =(req,res)=>{
    const id = req.params.id
    Books.findByIdAndDelete(id)
        .then((result) =>{

        })
        .catch((err)=>{

        })
}

module.exports ={
    books_index,
    book_details,
    book_create
}
