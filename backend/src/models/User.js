const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        required:true
    },
    borrowedBooks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }]
},{timestamps:true});

const User = mongoose.model("User",userSchema);

module.exports = User;