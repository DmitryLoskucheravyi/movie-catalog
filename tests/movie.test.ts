import request from "supertest";

import app from "../src/app";

describe("Movie API", () => {
  let accessToken: string;

  beforeEach(async () => {
    await request(app)
      .post("/auth/register")
      .send({
        email: "test@example.com",

        password: "password123"
      });

    const loginResponse = await request(app)
      .post("/auth/login")
      .send({
        email: "test@example.com",

        password: "password123"
      });

    accessToken =
      loginResponse.body.accessToken;
  });

  it("should create movie", async () => {
    const response = await request(app)
      .post("/movies")
      .set(
        "Authorization",
        `Bearer ${accessToken}`
      )
      .send({
        title: "Interstellar",

        director: "Christopher Nolan",

        year: 2014,

        genre: "Sci-Fi",

        rating: 9
      });

    expect(response.status).toBe(201);

    expect(response.body.title).toBe(
      "Interstellar"
    );
  });

  it("should return validation error", async () => {
    const response = await request(app)
      .post("/movies")
      .set(
        "Authorization",
        `Bearer ${accessToken}`
      )
      .send({
        title: "",

        director: "Christopher Nolan",

        year: 1800,

        genre: "",

        rating: 20
      });

    expect(response.status).toBe(400);

    expect(response.body.message).toBe(
      "Validation failed"
    );
  });

  it("should get all movies", async () => {
    await request(app)
      .post("/movies")
      .set(
        "Authorization",
        `Bearer ${accessToken}`
      )
      .send({
        title: "Batman",

        director: "Matt Reeves",

        year: 2022,

        genre: "Action",

        rating: 8
      });

    const response = await request(app).get(
      "/movies"
    );

    expect(response.status).toBe(200);

    expect(response.body.movies.length).toBe(1);
  });

  it("should delete movie", async () => {
    const createResponse = await request(app)
      .post("/movies")
      .set(
        "Authorization",
        `Bearer ${accessToken}`
      )
      .send({
        title: "Delete Test",

        director: "Test Director",

        year: 2020,

        genre: "Drama",

        rating: 7
      });

    const movieId = createResponse.body._id;

    const deleteResponse = await request(app)
      .delete(`/movies/${movieId}`)
      .set(
        "Authorization",
        `Bearer ${accessToken}`
      );

    expect(deleteResponse.status).toBe(204);
  });
});