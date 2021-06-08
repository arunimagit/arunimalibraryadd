const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdata"); 

function router(nav){

    booksRouter.get("/",function(req,res){
        //Code for displaying all the books from the DataBase inside our book page
        Bookdata.find()            
        .then(function(books){       
            res.render("books",
            {
                nav,
                title:"Library",
                books
            });

        })
       
    });

     
    
    booksRouter.get("/:id", function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id : id})
        .then(function(book){
            res.render("book",{
                nav,
                title:"Library",
                book
            });

        })
            
    });

    

    //delete
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOneAndDelete({_id : id})
            .then(function(book){
                res.redirect('/books');
                
            });
    });


    //edit
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
            .then(function(book){
                res.render("editBook",{
                    nav,
                    book
                });
            });    
    });
    booksRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
            .then(function(book){
                    if (!book){
                        return next(new Error('cant load'));
                    }
                    else {
                        var itemedit = {
                            title: req.body.title,
                            author: req.body.author,
                            genre:  req.body.genre,
                            image:  req.body.image
                        }
                        var bookedit = Bookdata(itemedit);
                        bookedit.save();
                        Bookdata.findByIdAndUpdate(id,itemedit,(er,book1) => {
                            res.redirect('/books/'+book1._id);
                        });
                    }
            });
    });

   

    return booksRouter;

}


module.exports = router;