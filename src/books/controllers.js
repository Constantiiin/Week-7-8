const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.author,
      author: req.body.author,
      genre: req.body.genre,
      // title: "matilda";
      //  author: "ronald",
      // genre: "childrens",
    });
    res.status(201).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addBook: addBook,
};
