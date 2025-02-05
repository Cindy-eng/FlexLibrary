const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const BookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },

    cover:{
        type:String,
        required:false
    },

    description:{
        type:String,
        required:false
    }

});

const Book = mongoose.model('Book',BookSchema);
module.exports=Book;