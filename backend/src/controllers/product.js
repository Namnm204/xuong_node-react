import { StatusCodes } from "http-status-codes";
import Product from "../models/product";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "danh sách Không có sản phẩm nào" });
    }
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

//thầy product / mình products
export const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (products.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "không tìm thấy sản phẩm nào" });
    }
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
export const DeleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const UpdateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const relatedProduct = async (req, res) => {
  try {
    const product = await Product.find(
      { category: req.params.categoryId },
      null,
      { skip: 1 }
    );
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {}
};
