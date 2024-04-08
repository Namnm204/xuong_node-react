import cors from "cors";
// import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { connectDB } from "./config/db.js";
import authRouter from "./router/auth.js";
import productRouter from "./router/product.js";
import categorytRouter from "./router/category.js";
import cartRouter from "./router/cart.js";

const app = express();
// dotenv.config;
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//connect db
// connectDB(process.env.DB_URI);
connectDB("mongodb://127.0.0.1:27017/xuongnodejs");
//router
app.use("/api/v1", authRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", categorytRouter);
app.use("/api/v1", cartRouter);
//
export const viteNodeApp = app;
