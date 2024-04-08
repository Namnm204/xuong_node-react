import { Outlet } from "react-router-dom";

const layoutAdmin = () => {
  return (
    <>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default layoutAdmin;
