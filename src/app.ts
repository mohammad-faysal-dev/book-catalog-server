import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
// const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;

// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });
