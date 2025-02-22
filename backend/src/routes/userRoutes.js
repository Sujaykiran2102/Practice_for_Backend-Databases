const express = require("express");
const Book = require("../models/Book");
const User = require("../models/User");

const router = express.Router()

router.post("/users",async(req,res)=>{
    try{
        const {name,studentId,contact} = req.body;
        const newUser = new User({name,studentId,contact});
        await newUser.save();
        res.status(201).json({message : "User added Successfully", user : newUser});
    }
   catch(error){
    res.status(500).json({error: error.message});
   }
});

router.post("/users/:userId/books/:bookId", async(req,res)=>{
    try{
        const {userId,bookId} = req.params;

        const book = await Book.findById(bookId);
        if(!book){
            return res.status(404).json({message : "Book not found"});
        }
        if(book.availability === "borrowed"){
            return res.status(400).json({message : "Book is already borrowed"});
        }

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message : "User does not exist"});
        }

        book.availability = "borrowed";
        user.borrowedBooks.push(book._id);

        await book.save();
        await user.save();

        res.status(200).json({message : "Book borrowed successfully"});
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
});

module.exports = router;