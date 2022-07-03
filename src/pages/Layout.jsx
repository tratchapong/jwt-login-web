import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <nav className="container bg-info p-3 ">
        <Navbar />
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
