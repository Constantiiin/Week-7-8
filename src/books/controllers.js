const Books = require("./model");

// Find Book

exports.findBook = async (req, res) => {
  try {
    const books = await Books.find();

    if (!books) {
      return res.status(404).json({ success: true, message: "No books found" });
    }

    return res
      .status(200)
      .json({ success: true, count: books.length, data: books });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// Add a book

exports.addBook = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "No title given" });
    }

    const newBook = await Books.create(req.body);

    return res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// Update a book

exports.updateBookId = async (req, res) => {
  const { id } = req.params;
  const { title, author, description, genre } = req.body;

  try {
    const book = await Books.findById(id);

    if (!book) {
      return res
        .status(404)
        .json({ success: true, message: `Book with id: ${id} not found.` });
    }

    if (!title || !author || !description || !genre) {
      return res
        .status(400)
        .json({ success: false, message: "Please add all the fields" });
    }

    const updatedBook = await Books.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // new: true returns the updated document

    return res.status(200).json({ success: true, data: updatedBook });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// Delete a book

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Books.find(id);

    if (!book) {
      return res
        .status(404)
        .json({ success: true, message: `Book with id: ${id} not found.` });
    }

    return res
      .status(200)
      .json({ success: true, message: "Book has just been deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// Delete all books

exports.deleteAllBooks = async (req, res) => {
  try {
    const books = await Books.deleteMany();

    if (!books) {
      return res.status(404).json({ success: true, message: "No books found" });
    }

    return res.status(200).json({
      success: true,
      count: books.length,
      message: "All books are deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
