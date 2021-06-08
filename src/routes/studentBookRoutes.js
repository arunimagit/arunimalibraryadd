const express = require("express");
const studentbooksRouter = express.Router();
function router(navs){

    var books = [
        {
            title: "Tom and Jerry",
            author: "Joseph Barbera",
            genre: "Cartoon",
            img: "tom.jpg"
        },
        {
            title: "Harry Potter",
            author: "J K Rowling",
            genre: "Fantasy",
            img: "Harry.png"
        },
        {
            title: "Paathumayude Aadu",
            author: "Basheer",
            genre: "Drama",
            img: "basheer.jpg"
        },
        {
            title: "Wings of Fire",
            author: "A. P. J. Abdul Kalam",
            genre: "Autobiography",
            img: "apj.jpg"
        },
    
    ]
    studentbooksRouter.get("/",function(req,res){
        res.render("studentBooks",
        {
            navs,
            title:"Library",
            books
        });
    });
    
    
    studentbooksRouter.get("/:id", function(req,res){
        const id = req.params.id;
            res.render("studentBook",{
                navs,
                title:"Library",
                book:books[id]
            });
    });

    return studentbooksRouter;

}


module.exports = router;