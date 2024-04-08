import { Footer, Header } from "..";
import { Outlet } from "react-router-dom";
const Layoutwebsite = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layoutwebsite;
