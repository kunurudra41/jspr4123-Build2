const express = require("express");
const { users } = require("./data/users.json")
// const { books } = require("./data/books.json")

const app = express();

const port = 5502;

app.use(express.json());

app.get("/" ,(req,res)=>{
res.status(200).json({
    message: "server is up and running:-)",
    data : "hello there"
 });
});

/**
 * route : users
 * Method :GET
 * Description : Get all users
 * Access : Public
 * Parameters : none
 */
//http://localhost:5502
app.get("/users" ,(req,res) => {
    res.status(200).json({
        success:true,
        data : users,
     });
    });

//https://localhost:5502/user/:id
/**
 * route : /users/:id
 * Method :GET
 * Description : Get single users by id
 * Access : Public
 * Parameters : id
 */
app.get("/users/:id",(req,res)=>{
    //const id = req.params.id;
    const {id} = req.params.id;
    const user = users.find((each)=>each.id === id);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User Doesn't Exists !!"
        });
    }
    return req.status(200).json({
        success:true,
        message:"User Found",
        data:user,
    });
});


/**
 * route : /users
 * Method :POST
 * Description : creating a new user
 * Access : Public
 * Parameters : none
 */
app.post("/users",(req,res)=>{
    const {id,name,surname,email,subscriptionType,subscriptionDate} = 
    req.body;

    const user = user.find((each)=>each.id===id);

    if (users) {
      return res.status(404).json({
        success:false,
        message:"User With The ID Exists "
      });  
    }

    user.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    });

    return res.status(201).json({
        success:true,
        message:"User added Successfully",
        data:users,
   });
});
/**
 * route : /users/:id
 * Method :PUT
 * Description :updating a user by their id
 * Access : Public
 * Parameters : ID
 */
app.put("/users/:id",(req,res) =>{
    const { id } = req.params;
    const { data } = req.body;

    const user = users.find((each)=> each.id === id);
    if (!user) {
        return res.status(404).json({
            success:false,
            message:"User Doesn't Exists !!!",
        });
    }
    const UpdateUserData = Users.map((each)=>{
        if(each,id===id){
            return {
                ...each,
                ...data,
            }
        }
        return each;
    });
    return res.status(200).json({
        success:true,
        message: "User Updated !!",
        data:UpdateUserData,
    })
});
 app.get("*" ,(req,res)=>{
    res.status(404).json({
         message: "this rout does not exists"
     });
});

app.listen(port,()=>{
    console.log(`Server Started Running on Port: ${port}`)
});