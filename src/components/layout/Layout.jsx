import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CartDrawer from "../Cart/CartDrawer";
const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
};

export default Layout;