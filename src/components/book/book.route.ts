import express from "express";
import { BooksController } from "./book.controller";
const router = express.Router();

router.get("/", BooksController.getAllBooks);
router.get("/:id", BooksController.getSingleBook);

export const bookRoutes = router;
