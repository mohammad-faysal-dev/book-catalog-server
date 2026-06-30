import { IBook } from "./book.interface";
import { Book } from "./book.model";

const getAllBooks = async () => {
  const result = await Book.find();
  return result;
};
const getSingleBook = async (
  id: string | undefined,
): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};
export const BookService = {
  getAllBooks,
  getSingleBook,
};
