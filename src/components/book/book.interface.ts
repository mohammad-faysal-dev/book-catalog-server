import { Model, Types } from "mongoose";

export type IReview = {
  userId: Types.ObjectId;
  userName: string;
  comment: string;
  rating: number;
  createdAt?: Date;
};

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date | string;
  description?: string;
  imageUrl?: string;
  addedBy: Types.ObjectId;
  reviews?: IReview[];
};

export type BookModel = Model<IBook, Record<string, unknown>>;
