import instance from "@/config/axios";
import { IProduct } from "@/interfaces/product"; // Import các kiểu dữ liệu

// Hàm lấy tất cả sản phẩm
export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    // Gửi request GET đến endpoint "/products" để lấy danh sách tất cả sản phẩm từ API
    const response = await instance.get("/products");
    return response.data; // Trả về dữ liệu sản phẩm từ response
  } catch (error) {
    return []; // Trả về một mảng rỗng nếu có lỗi xảy ra
  }
};

// Hàm lấy sản phẩm bằng ID
export const getProductsById = async (id: number | string) => {
  try {
    // Gửi request GET đến endpoint "/products/:id" để lấy thông tin sản phẩm với ID tương ứng từ API
    const response = await instance.get(`/products/${id}`);
    return response.data; // Trả về dữ liệu sản phẩm từ response
  } catch (error) {
    console.log(error); // Ghi log lỗi nếu có lỗi xảy ra
  }
};

// Hàm thêm sản phẩm
export const addProduct = async (product: IProduct) => {
  try {
    // Gửi request POST đến endpoint "/products" để thêm sản phẩm mới vào API
    const response = await instance.post(`/products`, product);
    return response.data; // Trả về dữ liệu sản phẩm đã được thêm từ response
  } catch (error) {
    console.log(error); // Ghi log lỗi nếu có lỗi xảy ra
  }
};

// Hàm xóa sản phẩm bằng ID
export const DeleteById = async (id: number | string) => {
  try {
    // Gửi request DELETE đến endpoint "/products/:id" để xóa sản phẩm với ID tương ứng từ API
    const response = await instance.delete(`/products/${id}`);
    return response.data; // Trả về dữ liệu từ response
  } catch (error) {
    console.log(error); // Ghi log lỗi nếu có lỗi xảy ra
  }
};

// Hàm cập nhật thông tin sản phẩm
export const UpdateProduct = async (product: IProduct) => {
  try {
    // Gửi request PUT đến endpoint "/products/:id" để cập nhật thông tin sản phẩm với ID tương ứng từ API
    const response = await instance.put(`/products/${product._id}`, product);
    return response.data; // Trả về dữ liệu sản phẩm đã được cập nhật từ response
  } catch (error) {
    console.log(error); // Ghi log lỗi nếu có lỗi xảy ra
  }
};
