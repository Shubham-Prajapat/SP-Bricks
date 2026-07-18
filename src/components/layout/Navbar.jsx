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
    // header: brand-red, matches the logo badge's deep red
    <header className="sticky top-0 z-50 bg-[#7A1408] shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo — use the dark-background (cream wordmark) logo file here */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="SP Bricks Logo" className="h-14" />
          </NavLink>

          {/* Desktop Menu */}
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

          {/* Search */}
          <div className="hidden lg:flex items-center bg-[#FDF4E8] rounded-full px-4 py-2 w-80">
            <FiSearch className="text-[#7A1408] text-lg" />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full outline-none text-sm bg-transparent text-[#1C1712] placeholder:text-[#8a7a6d]"
            />
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="relative">
              <FiHeart className="text-2xl text-[#FDF4E8] hover:text-[#FFA857] transition" />
            </button>

            <button className="relative">
              <FiShoppingCart className="text-2xl text-[#FDF4E8] hover:text-[#FFA857] transition" />
              <span className="absolute -top-2 -right-2 bg-[#E8720C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <button className="flex items-center gap-2 bg-[#E8720C] text-white px-4 py-2 rounded-full hover:bg-[#FFA857] transition">
              <FiUser />
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-[#FDF4E8]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — kept on a light panel for readability, dropped below the red bar */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FDF4E8] border-t border-[#E8720C]/30 shadow-md">
          <nav className="flex flex-col p-5 gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive ? "text-[#A11E04]" : "text-[#1C1712] hover:text-[#A11E04]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="border border-[#e0d4c4] rounded-full px-4 py-2 flex items-center">
              <FiSearch className="text-[#7A1408]" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full outline-none bg-transparent text-[#1C1712] placeholder:text-[#8a7a6d]"
              />
            </div>

            <button className="flex items-center gap-3 text-[#1C1712]">
              <FiHeart />
              Wishlist
            </button>

            <button className="flex items-center gap-3 text-[#1C1712]">
              <FiShoppingCart />
              Cart
            </button>

            <button className="bg-[#E8720C] text-white py-3 rounded-full flex justify-center items-center gap-2 hover:bg-[#FFA857] transition">
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