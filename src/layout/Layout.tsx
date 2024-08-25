import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Navigacioni bar */}
      <main className="flex-grow">
        <Outlet /> {/* Ovo će prikazivati sadržaj ruta */}
      </main>
      <Footer /> {/* Podnožje */}
    </div>
  );
};

export default Layout;