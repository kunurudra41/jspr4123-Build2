const express = require("express");

//const {user} = require("./data/users.json")
//const {books} = require("./data/books.json")

const app = express();

const port = 5502;

app.use(express.json());

app.get("/" ,(req,res)=>{
res.status(200).json({
    message: "server is up and running:-)",
    data : "hello there"
})
})

/**
 * route : users
 * Method :GET
 * Description : Get all users
 * Access : Public
 * Parameters : home
 */
app.get("*" ,(req,res)=>{
    res.status(200).json({
        message: "this rout does not exists"
    })
})

app.listen(port,()=>{
    console.log(`Server Started Running on Port: ${port}`)
})