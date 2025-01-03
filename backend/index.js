import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/products.js";
dotenv.config();
const app = express();
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log("db connection successful");
});

app.use("/", productRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  const massage = `server running on port ${PORT}`;
  console.log(massage);
});
