import mongoose from "mongoose";

import { MovieModel } from "../src/models/movie.model";

describe("Movie Model", () => {
  const ownerId = new mongoose.Types.ObjectId();

  it("should create movie", async () => {
    const movie = await MovieModel.create({
      title: "Interstellar",

      director: "Christopher Nolan",

      year: 2014,

      genre: "Sci-Fi",

      rating: 9,

      owner: ownerId
    });

    expect(movie.title).toBe("Interstellar");

    expect(movie.director).toBe(
      "Christopher Nolan"
    );
  });

  it("should fail with invalid rating", async () => {
    await expect(
      MovieModel.create({
        title: "Invalid Movie",

        director: "Unknown",

        year: 2020,

        genre: "Drama",

        rating: 20,

        owner: ownerId
      })
    ).rejects.toThrow();
  });

  it("should generate virtual field", async () => {
    const movie = await MovieModel.create({
      title: "Dune",

      director: "Denis Villeneuve",

      year: 2021,

      genre: "Sci-Fi",

      rating: 8.3,

      owner: ownerId
    });

    expect(movie.movieInfo).toBe(
      "Dune (2021)"
    );
  });

  it("should include timestamps", async () => {
    const movie = await MovieModel.create({
      title: "Batman",

      director: "Matt Reeves",

      year: 2022,

      genre: "Action",

      rating: 7.8,

      owner: ownerId
    });

    expect(movie.createdAt).toBeDefined();

    expect(movie.updatedAt).toBeDefined();
  });
});