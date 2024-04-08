import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { DeleteById, UpdateProduct, addProduct } from "@/service/product";

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
const useProductMutation = ({ action }: useProductMutationProps) => {
  const form = useForm(); // Sử dụng hook useForm để quản lý form

  const queryClient = useQueryClient(); // Sử dụng hook useQueryClient để truy cập vào instance của queryClient

  // Sử dụng hook useMutation để thực hiện mutation (tạo mới, cập nhật, xóa) dữ liệu
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "CREATE":
          await addProduct(product); // Gọi hàm addProduct để tạo mới sản phẩm
          break;
        case "UPDATE":
          await UpdateProduct(product); // Gọi hàm UpdateProduct để cập nhật sản phẩm
          break;
        case "DELETE":
          await DeleteById(product.id!); // Gọi hàm DeleteById để xóa sản phẩm dựa trên id
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      // Khi mutation thành công, gọi hàm invalidateQueries để làm mới các truy vấn liên quan đến sản phẩm
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });

  const onSubmit = (product: IProduct) => {
    mutate(product); // Gọi hàm mutate để thực hiện mutation với dữ liệu sản phẩm được truyền vào
  };

  return { form, onSubmit, ...rest }; // Trả về các giá trị gồm form, onSubmit và các giá trị còn lại từ useMutation
};

export default useProductMutation;
