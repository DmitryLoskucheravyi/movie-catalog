import mongoose, {
  InferSchemaType,
  model,
  Schema
} from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    director: {
      type: String,
      required: true,
      trim: true
    },

    year: {
      type: Number,
      required: true,
      min: 1900,
      max: 2100
    },

    genre: {
      type: String,
      required: true,
      trim: true
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
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

export type Movie = InferSchemaType<typeof movieSchema>;

export const MovieModel = model("Movie", movieSchema);