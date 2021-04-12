const BookRouter = require("express").Router();
const BookCtrl = require("../controllers/book-ctrl");

BookRouter.post("/", BookCtrl.createBook);
BookRouter.get("/", BookCtrl.getAllBooks);
BookRouter.get("/id/:id", BookCtrl.getBookById);
BookRouter.get("/name/:name", BookCtrl.getBookByName);
BookRouter.put("/id/:id", BookCtrl.updateBookByID);

module.exports = BookRouter;
