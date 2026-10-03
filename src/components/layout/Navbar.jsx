import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sp-bricks-logo.png";

import {
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
  FiUser,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

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

  const { cart, openCart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#7A1408]/95 backdrop-blur-md shadow-lg">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        
        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}

          <NavLink
            to="/"
            className="flex items-center shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logo}
              alt="SP Bricks Logo"
              className="h-12 sm:h-14 w-auto"
            />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-[#FFA857]"
                      : "text-[#FDF4E8] hover:text-[#FFA857]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP SEARCH ================= */}

          <div className="hidden lg:flex items-center bg-[#FDF4E8] rounded-full px-4 py-2 w-72 xl:w-80">
            <FiSearch className="text-[#7A1408] text-lg shrink-0" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full outline-none text-sm bg-transparent text-[#1C1712] placeholder:text-[#8a7a6d]"
            />
          </div>

          {/* ================= DESKTOP RIGHT ================= */}

          <div className="hidden lg:flex items-center gap-5">

            {/* Wishlist */}

            {/* <button
              type="button"
              className="relative cursor-pointer"
            >
              <FiHeart className="text-2xl text-[#FDF4E8] hover:text-[#FFA857] transition" />
            </button> */}

            {/* Cart */}

            <button
              type="button"
              onClick={openCart}
              className="relative cursor-pointer"
              aria-label="Open shopping cart"
            >
              <FiShoppingCart className="text-2xl text-[#FDF4E8] hover:text-[#FFA857] transition" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E8720C] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Login */}

            <NavLink
              to="/login"
              className="flex items-center gap-2 bg-[#E8720C] text-white px-4 py-2 rounded-full hover:bg-[#FFA857] transition"
            >
              <FiUser />
              Login
            </NavLink>

          </div>

          {/* ================= MOBILE RIGHT ================= */}

          <div className="flex lg:hidden items-center gap-4">

            {/* Mobile Cart */}

            <button
              type="button"
              onClick={openCart}
              className="relative cursor-pointer"
              aria-label="Open shopping cart"
            >
              <FiShoppingCart
                className="text-2xl sm:text-[26px] text-[#FDF4E8] hover:text-[#FFA857] transition"
              />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E8720C] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu */}

            <button
              type="button"
              aria-label="Toggle menu"
              className="text-3xl text-[#FDF4E8] cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="lg:hidden bg-[#FDF4E8] border-t border-[#E8720C]/30 shadow-md">

          <nav className="flex flex-col p-5 gap-5">

            {/* Navigation Links */}

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-[#A11E04]"
                      : "text-[#1C1712] hover:text-[#A11E04]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Search */}

            <div className="border border-[#e0d4c4] rounded-full px-4 py-2 flex items-center">

              <FiSearch className="text-[#7A1408]" />

              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full outline-none bg-transparent text-[#1C1712] placeholder:text-[#8a7a6d]"
              />

            </div>

            {/* Wishlist */}

            {/* <button
              type="button"
              className="flex items-center gap-3 text-[#1C1712]"
            >
              <FiHeart />
              Wishlist
            </button> */}

            {/* Login */}

            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-[#E8720C] text-white py-3 rounded-full flex justify-center items-center gap-2 hover:bg-[#FFA857] transition"
            >
              <FiUser />
              Login
            </NavLink>

          </nav>

        </div>
      )}

    </header>
  );
};

export default Navbar;