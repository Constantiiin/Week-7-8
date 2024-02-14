const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenress } = require("./cntrollers");

//Post - create a genre

genreRouter.post("/genres/addGenre", addGenre);

/// Get all genres

genreRouter.get("/genres/getAllGenres", getAllGenres);

module.exports = genreRouter;
