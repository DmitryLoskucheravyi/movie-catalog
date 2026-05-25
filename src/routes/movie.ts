import { Router, Request, Response } from "express";


import {
  createMovieSchema,
  updateMovieSchema
} from "../schemas/movie.schema";

import { validate } from "../middleware/validate";
import {
  AuthRequest,
  requireAuth
} from "../middleware/requireAuth";

import { MovieModel } from "../models/movie.model";

const router = Router();

router.get("/top", async (req: Request, res: Response) => {
  const movies = await MovieModel.find()
    .sort({ rating: -1 })
    .limit(5);

  res.json({
    movies
  });
});

router.get("/", async (req: Request, res: Response) => {
  const genre = req.query.genre as string | undefined;

  const director = req.query.director as string | undefined;

  const year = req.query.year as string | undefined;

  const sort = req.query.sort as string | undefined;

  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const filters: Record<string, unknown> = {};

  if (genre) {
    filters.genre = genre;
  }

  if (director) {
    filters.director = {
      $regex: director,
      $options: "i"
    };
  }

  if (year) {
    filters.year = Number(year);
  }

  let query = MovieModel.find(filters);

  if (sort === "rating") {
    query = query.sort({ rating: -1 });
  }

  if (sort === "year") {
    query = query.sort({ year: -1 });
  }

  const total = await MovieModel.countDocuments(filters);

  const movies = await query
    .skip(skip)
    .limit(limit);

  res.json({
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    movies
  });
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const movie = await MovieModel.findById(id);

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  res.json(movie);
});

router.post(
  "/",
  requireAuth,
  validate(createMovieSchema),
  async (req: AuthRequest, res: Response) => {
    const movie = await MovieModel.create({
      ...req.body,

      owner: req.user?.userId
    });

    res.status(201).json(movie);
  }
);

router.patch(
  "/:id",
  validate(updateMovieSchema),
  async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const updatedMovie = await MovieModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedMovie) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    res.json(updatedMovie);
  }
);

router.delete(
  "/:id",
  requireAuth,
  async (req: AuthRequest, res: Response) => {
    const movie = await MovieModel.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    if (movie.owner.toString() !== req.user?.userId) {
      return res.status(403).json({
        message: "Forbidden"
      });
    }

    await movie.deleteOne();

    res.status(204).send();
  }
);

export default router;