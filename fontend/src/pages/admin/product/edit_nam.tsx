// import { Link, useParams } from "react-router-dom";
// import { useEffect } from "react";
// import useProductQuery from "@/hooks/useProductQuery";
// import useProductMutation from "@/hooks/useProductMutation";

// const ProductEdit = () => {
//   const { id } = useParams(); // Lấy id sản phẩm từ URL
//   const { data } = useProductQuery(id); // Truy vấn thông tin sản phẩm dựa trên id
//   const { form, onSubmit } = useProductMutation({
//     action: "UPDATE", // Hành động cập nhật sản phẩm
//   });
//   useEffect(() => {
//     form.reset(data); // Đặt giá trị mặc định cho form dựa trên dữ liệu sản phẩm
//   }, [id, form, data]);

//   return (
//     <div>
//       <form
//         className="productadd container"
//         onSubmit={form.handleSubmit(onSubmit)} // Gửi form khi người dùng submit
//       >
//         <label htmlFor="">Name</label>
//         <input
//           className="form-control"
//           type="text"
//           {...form.register("name")} // Đăng ký trường "name" với form
//         />
//         <label htmlFor="">price</label>
//         <input
//           className="form-control"
//           type="number"
//           {...form.register("price")} // Đăng ký trường "price" với form
//         />
//         <label htmlFor="">image (link)</label>
//         <input
//           className="form-control"
//           type="text"
//           {...form.register("image")} // Đăng ký trường "image" với form
//         />
//         <label htmlFor="">description</label>
//         <input
//           className="form-control"
//           type="text"
//           {...form.register("description")} // Đăng ký trường "description" với form
//         />
//         <label htmlFor="">discount</label>
//         <input
//           className="form-control"
//           type="number"
//           {...form.register("discount")} // Đăng ký trường "discount" với form
//         />
//         <button className="btn btn-primary">{"Sửa sản phẩm"}</button>
//         <Link to={"/admin/products"}>
//           <button className="btn btn-primary">{"Danh sách"}</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default ProductEdit;
