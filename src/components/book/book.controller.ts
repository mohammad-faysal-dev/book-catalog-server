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

const getSingleBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);
  res.json({
    statusCode: 200,
    success: true,
    message: "Single Books Retrieved Successfully",
    data: result,
  });
};

export const BooksController = {
  getAllBooks,
  getSingleBook,
};
