import { Request, Response } from "express";

const getAllBooks = async (req: Request, res: Response) => {
  const { ...bookData } = req.body;
  const result = await BookService.getBooks(bookData);
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
