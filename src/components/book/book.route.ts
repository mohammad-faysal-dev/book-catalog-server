import express from "express";
import { BooksController } from "./book.controller";
const router = express.Router();

router.post("/create-book", BooksController.createBook);
router.get("/", BooksController.getAllBooks);
router.get("/:id", BooksController.getSingleBook);
router.patch("/:id", BooksController.updateBook);

export const BookRoutes = router;
