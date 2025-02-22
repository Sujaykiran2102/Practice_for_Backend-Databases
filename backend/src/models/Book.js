const mongoose = require("mongoose");

const bookschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        enum:["available","borrowed"],
        default:"available"
    }
},{timestamps:true})

const Book = mongoose.model("Book",bookschema);

module.exports = Book;