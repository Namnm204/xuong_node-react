import express from "express";
import {
  DeletecategoryById,
  UpdatecategoryById,
  createcategory,
  getAllcategory,
  getcategoryById,
} from "../controllers/category";

const router = express.Router();
router.get("/categorys", getAllcategory);
router.get("/categorys/:id", getcategoryById);
router.delete("/categorys/:id", DeletecategoryById);
router.put("/categorys/:id", UpdatecategoryById);
router.post("/categorys", createcategory);
export default router;
