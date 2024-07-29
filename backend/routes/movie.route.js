import express from "express";
import {
  getTrendingMovie,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
  getMoviesByCategory,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/trailers/:id", getMovieTrailers);
router.get("/details/:id", getMovieDetails);
router.get("/similar/:id", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;
