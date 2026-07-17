import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
  FiUser,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
            SP Bricks
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="font-medium text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center border rounded-full px-4 py-2 w-80">
            <FiSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full outline-none text-sm"
            />
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="relative">
              <FiHeart className="text-2xl text-gray-700 hover:text-red-500 transition" />
            </button>

            <button className="relative">
              <FiShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              <FiUser />
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col p-5 gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="border rounded-full px-4 py-2 flex items-center">
              <FiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full outline-none"
              />
            </div>

            <button className="flex items-center gap-3">
              <FiHeart />
              Wishlist
            </button>

            <button className="flex items-center gap-3">
              <FiShoppingCart />
              Cart
            </button>

            <button className="bg-blue-600 text-white py-3 rounded-full flex justify-center items-center gap-2 hover:bg-blue-700">
              <FiUser />
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;