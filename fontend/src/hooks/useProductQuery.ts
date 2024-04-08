import { getAllProducts, getProductsById } from "@/service/product";
import { useQuery } from "@tanstack/react-query";

const useProductQuery = (id?: number | string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT_KEY", id], // Khóa truy vấn, sử dụng mảng chứa chuỗi "PRODUCT_KEY" và giá trị id
    queryFn: async () => {
      return id ? await getProductsById(id) : await getAllProducts(); // Nếu có id, gọi hàm getProductsById(id), ngược lại gọi hàm getAllProducts()
    },
  });

  return { data, ...rest }; // Trả về object chứa data (dữ liệu trả về từ truy vấn) và các giá trị còn lại từ useQuery
};
export default useProductQuery;
