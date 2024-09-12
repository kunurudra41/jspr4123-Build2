const express = require("express");

const userRoutes = require('./routes/users.js');
const booksRoutes = require('./routes/books.js');

const app = express();

const port = 5502;

app.use(express.json());

//http://localhost:5502/users/users
app.get("/" ,(req,res)=>{
res.status(200).json({
    message: "server is up and running:-)",
    data : "hello there"
 });
});

app.use("/users",userRoutes);
app.use("/books",booksRoutes)


 app.get("*" ,(req,res)=>{
    res.status(404).json({
         message: "this route does not exists"
     });
});

app.listen(port,()=>{
    console.log(`Server Started Running on Port: ${port}`)
});