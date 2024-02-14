const { Router } = require("express");
const bookRouter = Router();
const Book = require("./model");

const { addBook, deleteBook, updateBook, findBook } = require(".controllers");

bookRouter.post("/Book/addBook", addBook);
bookRouter.get("/Book/findBook", findBook);
bookRouter.get("/Book/updateBook", updateBook);
bookRouter.delete("/Book/deleteBook", deleteBook);
bookRouter.delete("/Book/deleteAllBooks", deleteAllBooks);
const router = require("express").Router();

const {
    findBook,
    addBook,
    updateBook,
    deleteBook,
    deleteAllBooks,
    

} = require("./controllers");

// Chained route handlers
router.route("/").get(findBook).post(addBook).delete(deleteAllBooks).;
router.route("/").put(updateBook).delete(deleteBook);


module.exports = router;
