const moviesRouter = require("express").Router();
const moviesCtrl = require("../controllers/movie_ctrl");

moviesRouter.get("/all", moviesCtrl.getAllMovies);

moviesRouter.post("/saveMovie", moviesCtrl.saveMovies);

moviesRouter.get("/movie/:movieName", moviesCtrl.findMoviesByName);

moviesRouter.delete("/movie/:id", moviesCtrl.deleteMovies);

moviesRouter.put("/movie/:id", moviesCtrl.updateMovies);
module.exports = moviesRouter;
