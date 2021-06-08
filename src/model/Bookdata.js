//Accessing Mongoose Package
const mongoose = require("mongoose");

//DataBase Connection
mongoose.connect("mongodb://localhost:27017/library");
//mongoose.connect('mongodb+srv://user1:user1@ictakfiles.5sly2.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema Definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

//Model Creation
var Bookdata = mongoose.model("bookdata",BookSchema);

module.exports = Bookdata;