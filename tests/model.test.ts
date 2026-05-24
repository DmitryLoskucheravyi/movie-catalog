import { MovieModel } from "../src/models/movie.model";

describe("Movie Model", () => {
  it("should create movie", async () => {
    const movie = await MovieModel.create({
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Sci-Fi",
      rating: 9
    });

    expect(movie.title).toBe("Interstellar");

    expect(movie.director).toBe(
      "Christopher Nolan"
    );
  });

  it("should fail validation", async () => {
    let error: unknown;

    try {
      await MovieModel.create({
        title: "",
        director: "",
        year: 1700,
        genre: "",
        rating: 100
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
  });

  it("should generate virtual field", async () => {
    const movie = await MovieModel.create({
      title: "Dune",
      director: "Denis Villeneuve",
      year: 2021,
      genre: "Sci-Fi",
      rating: 8.5
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
      rating: 8
    });

    expect(movie.createdAt).toBeDefined();

    expect(movie.updatedAt).toBeDefined();
  });
});