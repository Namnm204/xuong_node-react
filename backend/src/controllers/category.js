import { StatusCodes } from "http-status-codes";
import Category from "../models/category";
import Product from "../models/product";
import slugify from "slugify";

export const createcategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
      slug: slugify(req.body.name, "-"),
    });
    return res.status(StatusCodes.CREATED).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const getAllcategory = async (req, res) => {
  try {
    const categorys = await Category.find();
    if (categorys.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "danh sách Không có danh mục nào" });
    }
    return res.status(StatusCodes.OK).json(categorys);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

//thầy category / mình categorys
export const getcategoryById = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    const categorys = await Category.findById(req.params.id);
    if (categorys.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "không tìm thấy danh mục nào" });
    }
    return res.status(StatusCodes.OK).json({
      message: "tìm thấy danh mục",
      categorys,
      products,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
export const DeletecategoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const UpdatecategoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
