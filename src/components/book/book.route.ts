import express from "express";
import { BooksController } from "./book.controller";
const router = express.Router();

router.get("/", BooksController.getAllBooks);

export const bookRoutes = router;
