import request from "supertest";

import app from "../src/app";

describe("Movie API", () => {
  it("should create movie", async () => {
    const response = await request(app)
      .post("/movies")
      .send({
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Sci-Fi",
        rating: 9
      });

    expect(response.status).toBe(201);

    expect(response.body.title).toBe("Interstellar");

    expect(response.body.director).toBe(
      "Christopher Nolan"
    );
  });

  it("should return validation error", async () => {
    const response = await request(app)
      .post("/movies")
      .send({
        title: "",
        rating: 100
      });

    expect(response.status).toBe(400);

    expect(response.body.message).toBe(
      "Validation failed"
    );
  });

  it("should get all movies", async () => {
    await request(app)
      .post("/movies")
      .send({
        title: "Dune",
        director: "Denis Villeneuve",
        year: 2021,
        genre: "Sci-Fi",
        rating: 8.5
      });

    const response = await request(app)
      .get("/movies");

    expect(response.status).toBe(200);

    expect(response.body.movies.length).toBe(1);
  });

  it("should delete movie", async () => {
    const createResponse = await request(app)
      .post("/movies")
      .send({
        title: "Batman",
        director: "Matt Reeves",
        year: 2022,
        genre: "Action",
        rating: 8
      });

    const movieId = createResponse.body.id;

    const deleteResponse = await request(app)
      .delete(`/movies/${movieId}`);

    expect(deleteResponse.status).toBe(204);
  });
});