const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

router.post("/books", async(req,res)=>{
    try{
        const {title,author,genre,availability} = req.body;
        const newBook = new Book({title,author,genre,availability});
        await newBook.save();
        res.status(201).json({message:"Book added successfully",book: newBook});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
});

router.get("/books", async(req,res)=>{
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

router.put("/books/:id", async(req,res)=>{
    try{
        const updateBook = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateBook){
            return res.status(404).json("Book not found with given id");
        }
        res.status(200).json({message:"Book updated successfully",book:updateBook});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
})

router.delete("/books/:id",async(req,res)=>{
    try{
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        if(!deleteBook){
            return res.status(404).json("Book not found with given id");
    }
    res.status(200).json({message:"Book deleted successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
})

module.exports= router;