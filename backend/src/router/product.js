import express from "express";
import {
  DeleteProductById,
  UpdateProductById,
  createProduct,
  getAllProduct,
  getProductById,
  relatedProduct,
} from "../controllers/product";

const router = express.Router();
router.get("/products", getAllProduct);
router.get("/products/:id", getProductById);
router.get("/products/:categoryId/related", relatedProduct);
router.delete("/products/:id", DeleteProductById);
router.put("/products/:id", UpdateProductById);
router.post("/products", createProduct);
export default router;
