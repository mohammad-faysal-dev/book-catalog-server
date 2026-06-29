import { Model } from "mongoose";

export interface IReview {
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  coverImage?: string;
  description?: string;
  isbn?: string;
  reviews: IReview[];
  averageRating: number;
  totalReviews: number;
  createdAt: Date;
  updatedAt: Date;
}

export type BookModel = Model<IBook, Record<string, unknown>>;
