//luồng chạy đường dẫn
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Layoutwebsite from "./components/layout/layoutwebsite";
import ABoutPage from "./pages/ABout";
import DetailProduct from "./pages/DetailProduct";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import Notfound from "./pages/notfound";
import ShopPage from "./pages/shop";

// import LayoutAdmin from "./components/layout/layoutAdmin_nam";
// import ProductManagent from "./pages/admin/product/index_nam";
// import ProductAdd from "./pages/admin/product/add_nam";
// import ProductEdit from "./pages/admin/product/edit_nam";
import { Toaster } from "./components/ui/toaster";
import CartPage from "./pages/Cart";
import ProductManagent from "./pages/admin/product/index";
import Categorydeital from "./pages/categorydeital";
import Signin from "./pages/signin";
import ProductAdd from "./pages/admin/product/_components/add";
import ProductEdit from "./pages/admin/product/_components/edit";
import LayoutAdmin from "./pages/admin/layoutAdmin";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layoutwebsite />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="products/:id" element={<DetailProduct />} />
          <Route path="shop/categorys/:id" element={<Categorydeital />} />
          <Route path="about" element={<ABoutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="products" element={<ProductManagent />} />
          <Route path="/admin/products/add" element={<ProductAdd />} />
          <Route path="/admin/products/:id" element={<ProductEdit />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
