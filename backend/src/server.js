const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/Book");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("Mongodb Succesfully Connected"))
.catch((err)=> console.error("Mongodb connection error: ",err))

app.use(express.json());
app.use("/api",bookRoutes);
app.use("/api",userRoutes);

app.get('/',(req,res)=>{
    res.send("Server is running!")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})