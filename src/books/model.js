const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      defaultValue: "sameauthor",
    },
    genre: {
      type: DataTypes.STRING,
      defaultValues: "same genre",
    },
  },
  { timestamps: false }
);

module.exports = Book;
