import { Request, Response } from "express";
import { BookService } from "./book.service";

const getAllBooks = async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();
  res.json({
    statusCode: 200,
    success: true,
    message: "Books Retrieved successfully",
    data: result,
  });
};

export const BooksController = {
  getAllBooks,
};
