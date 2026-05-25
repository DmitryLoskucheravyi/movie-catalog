import { z } from "zod";

export const createMovieSchema = z.object({
  body: z.object({
    title: z.string().min(1),

    director: z.string().min(1),

    year: z.number().min(1900).max(2100),

    genre: z.string().min(1),

    rating: z.number().min(0).max(10)
  })
});

export const updateMovieSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),

    director: z.string().min(1).optional(),

    year: z.number().min(1900).max(2100).optional(),

    genre: z.string().min(1).optional(),

    rating: z.number().min(0).max(10).optional()
  })
});