import mongoose, { Schema } from "mongoose";
import { BookModel, IBook, IReview } from "./book.interface";

const reviewSchema = new Schema<IReview>(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: true,
  },
);

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    publicationDate: {
      type: Date,
      required: true,
      index: true,
    },
    coverImage: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    isbn: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      uppercase: true,
    },
    reviews: {
      type: [reviewSchema],
      default: [],
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export const Book = mongoose.model<IBook, BookModel>("Book", BookSchema);
