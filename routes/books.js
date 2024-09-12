const express = require("express")
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
//const { route } = require("./users");

const router = express.Router();

/**
 * route : /books 
 * Method :GET
 * Description : Get all books
 * Access : Public
 * Parameters : none
 */

router.get ("/books",(req,res)=>{
    res.status(200).json({success:true,message:"got all the books", data :books , });
});

/**
 * route : /books 
 * Method :GET
 * Description : Get books By Their ID
 * Access : Public
 * Parameters : none
 */

router.get("/:id",(req,res)=>{
    //const id = req.params.id;
    const {id} = req.params.id;
    const book = books.find((each)=>each.id === id);
    if(!book){
        return res.status(404).json({
            success:false,
            message:"Book Not Found !!"
        });
    }
    return req.status(200).json({
        success:true,
        message:"Found The Book By Their ID",
        data:books,
    });
});




/**
 * route : /books/issued 
 * Method :GET
 * Description : Get all  issued books
 * Access : Public
 * Parameters : none
 */
router.get("/issued/by-user",(req,res)=>{
    const usersWithIssuedBook = users.filter((each)=>{
        if(each.issuedBook) return each;
    });
    const issuedBooks = [];
    usersWithIssuedBook.forEach((each)=>{
        const book = books.find((book)=> (book.id === each.issuedBook));
        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
    });
    if(issuedBooks.length === 0){
        return res.status(404).json({
            success:false,
            message:"No Book Had Been Issued Yet.."
        });
    }
    return res.status(200).json({
        success:true,
        message:"Users With Issued Books..",
        data:issuedBooks,
    });
});
module.exports = router;