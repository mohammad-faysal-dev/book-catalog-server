import express, { Application } from "express";
import cors from "cors";
import { bookRoutes } from "./components/book/book.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/books',bookRoutes)

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
