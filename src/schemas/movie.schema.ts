import { z } from "zod";

export const createMovieSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title too long"),

  director: z
    .string()
    .min(1, "Director is required")
    .max(100, "Director too long"),

  year: z
    .number()
    .int("Year must be integer")
    .min(1888, "Invalid movie year")
    .max(new Date().getFullYear(), "Year cannot be in future"),

  genre: z
    .string()
    .min(1, "Genre is required")
    .max(50, "Genre too long"),

  rating: z
    .number()
    .min(0, "Rating too low")
    .max(10, "Rating too high")
});

export const updateMovieSchema = createMovieSchema.partial();