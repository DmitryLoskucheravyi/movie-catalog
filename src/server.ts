import dotenv from "dotenv";

dotenv.config();

import app from "./app";

import { connectDatabase } from "./config/database";

const PORT = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();