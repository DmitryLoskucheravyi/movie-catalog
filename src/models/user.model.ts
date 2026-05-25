import mongoose, { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
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

userSchema.virtual("userInfo").get(function () {
  return `${this.email}`;
});

export type User = InferSchemaType<typeof userSchema>;

export const UserModel = model("User", userSchema);