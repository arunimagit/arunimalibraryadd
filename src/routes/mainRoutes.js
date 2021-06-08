const express = require("express");
const mainRouter = express.Router();
function router(nav){

    var books = [ 
        {
            title: "The Moment of Tenderness",
            author: "Madeleine L'Engle",
            genre: "Fiction",
            img: "4.jpg"
        },  {
            title: "Big Nate: Revenge of the Cream Puffs",
            author: "Lincoln Peirce",
            genre: "Comics",
            img: "5.jpg"
        },

        {
            title: "Code Name Hélène",
            author: "Ariel Lawhon",
            genre: "Spy Fiction",
            img: "2.jpg"
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
    mainRouter.get("/",function(req,res){
        res.render("main",
        {
            nav,
            title:"Library",
            books
        });
    });
    
    return mainRouter;

}


module.exports = router;