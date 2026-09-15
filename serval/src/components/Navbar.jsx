import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Departments", path: "/departments" },
    { name: "SUG", path: "/sug" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Navbar */}
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="FPE Sunshine TV"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover"
            />

            <div>
              <h1 className="text-base sm:text-xl font-bold">
                FPE SUNSHINE TV
              </h1>

              <p className="text-[10px] sm:text-xs text-gray-300">
                Federal Polytechnic Ede
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">

            <nav className="flex items-center gap-7">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-yellow-400 font-semibold"
                        : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </nav>

            {/* Search */}
            <button
              type="button"
              className="text-white hover:text-yellow-300 transition"
            >
              <FaSearch />
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2347041421193"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              Join WhatsApp
            </a>

            {/* Login */}
            <NavLink
              to="/login"
              className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              <FaUserCircle />
              Login
            </NavLink>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4">

            <nav className="bg-blue-800 rounded-xl overflow-hidden">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 border-b border-blue-700 transition ${
                      isActive
                        ? "bg-blue-700 text-yellow-400 font-semibold"
                        : "text-white hover:bg-blue-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile WhatsApp */}
              <a
                href="https://wa.me/2347041421193"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 py-4 hover:bg-green-700 transition"
              >
                <FaWhatsapp />
                Join WhatsApp
              </a>

              {/* Mobile Login */}
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-yellow-500 text-black py-4 hover:bg-yellow-400 transition"
              >
                <FaUserCircle />
                Login
              </NavLink>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;