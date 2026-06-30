import { Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  const { ...bookData } = req.body;
  const result = await BookService.createBook(bookData);
  res.json({
    statusCode: 200,
    success: true,
    message: "Book create successfully",
    data: result,
  });
};

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
  const result = await BookService.getSingleBook(id as string);
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
  createBook
};
