const express = require("express");
const studentmainRouter = express.Router();
function router(navs){

    var books = [ 
         {
            title: "Big Nate: Revenge of the Cream Puffs",
            author: "Lincoln Peirce",
            genre: "Comics",
            img: "5.jpg"
        },
        {
            title: "Frog and Toad Are Friends",
            author: "Arnold Lobel",
            genre: "Children's literature",
            img: "7.jpg"
        },

    
        {
            title: "Broken",
            author: "Don Winslow",
            genre: "Crime Fiction",
            img: "3.png"
        },
        {
            title: "How Rocket Learned to Read",
            author: "Tad Hills",
            genre: "Fiction",
            img: "8.jpg"
        }
    ]
    studentmainRouter.get("/",function(req,res){
        res.render("studentMain",
        {
            navs,
            title:"Library",
            books
        });
    });
    
    return studentmainRouter;

}


module.exports = router;