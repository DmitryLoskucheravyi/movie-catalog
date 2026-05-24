import mongoose from "mongoose";

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    const databaseName = process.env.DATABASE_NAME;

    if (!mongoUri) {
      throw new Error("MONGODB_URI is missing");
    }

    await mongoose.connect(mongoUri, {
      dbName: databaseName
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed");

    console.error(error);

    process.exit(1);
  }
};