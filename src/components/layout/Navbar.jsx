import { useEffect, useState } from "react";
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
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Categories",
    path: "/categories",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  // Cart Context
  const { cart, openCart } = useCart();

  // Calculate total quantity
  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  // Close mobile menu
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  // Open cart from mobile
  const handleMobileCart = () => {
    setMenuOpen(false);
    openCart();
  };

  return (
<header
  className={`w-full z-[100] transition-all duration-300 ${
    isScrolled
      ? "fixed top-0 left-0 bg-[#7A1408]/95 backdrop-blur-md shadow-lg"
      : "relative bg-[#7A1408]"
  }`}
>      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="flex items-center justify-between h-20">

          {/* =====================================================
              LOGO
          ====================================================== */}

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="SP Bricks Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </NavLink>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium text-sm xl:text-base transition-colors duration-300 group ${
                    isActive
                      ? "text-[#FFA857]"
                      : "text-[#FDF4E8] hover:text-[#FFA857]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {/* Active underline */}
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-[#FFA857] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =====================================================
              DESKTOP SEARCH
          ====================================================== */}

          <div className="hidden xl:flex items-center bg-[#FDF4E8] rounded-full px-4 py-2 w-64 2xl:w-80">
            <FiSearch className="text-[#7A1408] text-lg shrink-0" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full outline-none text-sm bg-transparent text-[#1C1712] placeholder:text-[#8a7a6d]"
            />
          </div>

          {/* =====================================================
              DESKTOP RIGHT ICONS
          ====================================================== */}

          <div className="hidden lg:flex items-center gap-4 xl:gap-5">

            {/* Wishlist */}
            <button
              type="button"
              aria-label="Wishlist"
              className="group relative p-1"
            >
              <FiHeart
                className="text-2xl text-[#FDF4E8] group-hover:text-[#FFA857] transition-colors duration-300"
              />
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Open shopping cart"
              onClick={openCart}
              className="group relative p-1 cursor-pointer"
            >
              <FiShoppingCart
                className="text-2xl text-[#FDF4E8] group-hover:text-[#FFA857] transition-colors duration-300"
              />

              {/* Cart Count */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-[#E8720C] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Login */}
            <NavLink
              to="/login"
              className="flex items-center gap-2 bg-[#E8720C] text-white px-4 py-2 rounded-full hover:bg-[#FFA857] transition-all duration-300 font-medium"
            >
              <FiUser size={18} />
              <span>Login</span>
            </NavLink>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden text-3xl text-[#FDF4E8] hover:text-[#FFA857] transition-colors duration-300"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FDF4E8] border-t border-[#E8720C]/30 shadow-md">
          <nav className="flex flex-col p-5 gap-5">

            {/* Mobile Navigation Links */}

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#A11E04]"
                      : "text-[#1C1712] hover:text-[#A11E04]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* =================================================
                MOBILE SEARCH
            ================================================== */}

            <div className="border border-[#e0d4c4] rounded-full px-4 py-2.5 flex items-center bg-white">
              <FiSearch className="text-[#7A1408] shrink-0" />

              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full outline-none bg-transparent text-[#1C1712] placeholder:text-[#8a7a6d]"
              />
            </div>

            {/* =================================================
                MOBILE WISHLIST
            ================================================== */}

            <button
              type="button"
              className="flex items-center gap-3 text-[#1C1712] hover:text-[#A11E04] transition-colors"
            >
              <FiHeart size={20} />

              <span>Wishlist</span>
            </button>

            {/* =================================================
                MOBILE CART
            ================================================== */}

            <button
              type="button"
              onClick={handleMobileCart}
              className="flex items-center gap-3 text-[#1C1712] hover:text-[#A11E04] transition-colors"
            >
              <div className="relative">
                <FiShoppingCart size={20} />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 min-w-4 h-4 px-1 bg-[#E8720C] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </div>

              <span>Cart</span>

              {cartCount > 0 && (
                <span className="ml-auto bg-[#E8720C] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {cartCount} Items
                </span>
              )}
            </button>

            {/* =================================================
                MOBILE LOGIN
            ================================================== */}

            <NavLink
              to="/login"
              onClick={closeMobileMenu}
              className="bg-[#E8720C] text-white py-3 rounded-full flex justify-center items-center gap-2 hover:bg-[#FFA857] transition-all duration-300 font-medium"
            >
              <FiUser size={19} />

              <span>Login</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;