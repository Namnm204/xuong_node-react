import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import User from "../models/user";
import bcryptjs from "bcryptjs";
export const signupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "trường name là bắt buộc",
    "string.empty": "Trường name không được để trống",
    "string.min": "Trường name phải có ít nhất 3 ký tự",
    "string.max": "Trường name phải có nhiều nhất 30 ký tự",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "trường email là bắt buộc",
    "string.empty": "Trường email không được để trống",
    "string.email": "Trường email không đúng định dạng",
  }),
  password: Joi.string().min(6).max(30).required().messages({
    "any.required": "trường password là bắt buộc",
    "string.empty": "Trường password không được để trống",
    "string.min": "Trường password phải có ít nhất 6 ký tự",
    "string.max": "Trường password phải có nhiều nhất 30 ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": "trường confirmPassword là bắt buộc",
    "string.empty": "Trường confirmPassword không được để trống",
    "any.only": "Trường confirmPassword không khớp",
    "any.invalid": "Trường confirmPassword không đúng định dạng",
  }),
  avatar: Joi.string().uri().messages({
    "any.required": "trường avatar là bắt buộc",
    "string.empty": "Trường avatar không được để trống",
    "string.uri": "Trường avatar phải là đường đẫn hợp lí",
  }),
});

export const signup = async (req, res) => {
  const { email, password, name, avatar } = req.body;
  const { error } = signupSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((item) => item.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      messages,
    });
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      messages: ["Email đã tồn tại"],
    });
  }
  const hashedPassword = await bcryptjs.hash(password, 12);
  const role = (await User.countDocuments({})) === 0 ? "admin" : "user";

  const user = await User.create({
    ...req.body,
    password: hashedPassword,
    role,
  });

  return res.status(StatusCodes.CREATED).json({
    messages: ["Đăng ký thành công"],
    user,
  });
};
export const signin = async (req, res) => {};
export const logout = async (req, res) => {};
