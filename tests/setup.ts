import mongoose from "mongoose";

process.env.JWT_ACCESS_SECRET =
  "test_access_secret";

process.env.JWT_REFRESH_SECRET =
  "test_refresh_secret";

beforeAll(async () => {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/movie_catalog_test"
  );
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();

  await mongoose.connection.close();
});

beforeEach(async () => {
  const collections =
    mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});