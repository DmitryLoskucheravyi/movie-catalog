import express, { Application, Request, Response } from "express";

import movieRoutes from "./routes/movie";

import { errorHandler } from "./middleware/errorHandler";

const app: Application = express();

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok"
  });
});

app.use("/movies", movieRoutes);

app.use(errorHandler);

export default app;