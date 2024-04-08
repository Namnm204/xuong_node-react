import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("ket noi thanh cong");
  } catch (error) {
    console.log("ket noi khong thanh cong");
  }
};
