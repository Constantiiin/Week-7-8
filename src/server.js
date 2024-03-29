require("dotenv").config();
const express = require("express");

const dbConnect = require("./db/dbConnect.js");

const Book = require("./books/model");

const bookRouter = require("./books/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(bookRouter);

const syncTables = async () => {
  await Book.sync();
};
app.use(expres.json());

app.get("/health", (req, res) => {
  console.log("hello");
  res.status(200).json({ message: "Api is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Server is listening on port ${port}`);
});
