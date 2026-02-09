import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes.js";
import connectDB from "./config/db.js";
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
//Base Route
app.get("/", (req, res) => {
  res.send("Welcome to the List API");
});

app.use("/api/products", productRouter);

export default app;