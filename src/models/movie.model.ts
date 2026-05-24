import mongoose, { Schema, Document, Model } from "mongoose";

export interface MovieDocument extends Document {
  title: string;

  director: string;

  year: number;

  genre: string;

  rating: number;

  movieInfo?: string;

  createdAt: Date;

  updatedAt: Date;
}

const movieSchema = new Schema<MovieDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100
    },

    director: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100
    },

    year: {
      type: Number,
      required: true,
      min: 1888,
      max: new Date().getFullYear()
    },

    genre: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 50
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10
    }
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true
    },

    toObject: {
      virtuals: true
    }
  }
);

movieSchema.virtual("movieInfo").get(function () {
  return `${this.title} (${this.year})`;
});

export const MovieModel: Model<MovieDocument> =
  mongoose.model<MovieDocument>("Movie", movieSchema);