import cookieParser from "cookie-parser";
import express from "express";

import { errorHandler } from "./middleware/errorHandler";
import authRoutes from "./routes/auth";
import movieRoutes from "./routes/movie";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok"
  });
});

app.use("/movies", movieRoutes);

app.use("/auth", authRoutes);

app.use(errorHandler);

export default app;