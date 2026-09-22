
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home", active: true },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Team", href: "/#team" },
    { name: "WhyChooseUs", href: "/#whychooseus" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 md:h-24 md:px-6 lg:px-8">

        {/* Logo */}
        <a href="/#home" className="flex items-center justify-center gap-4">
          <img
            src="/bike-logo.png"
            alt="Motor-Bike Logo"
            className="h-12 w-12 rounded-full"
          />

          <h1 className="text-2xl font-bold text-blue-700">
            Motor-Bike
          </h1>
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden space-x-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`rounded-md px-4 py-2 text-md font-semibold hover:bg-gray-400 hover:text-white hover:underline ${
                item.active ? "text-red-600 hover:bg-transparent" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Login & Register */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="rounded border border-red-600 px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl border bg-blue-500 px-4 py-2 text-md font-semibold hover:bg-blue-700 lg:hidden"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="space-y-2 bg-gray-400 px-4 pb-4 lg:hidden md:text-center">

          {/* Navigation Items */}
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md px-4 py-2 text-md font-semibold hover:bg-gray-100 hover:underline"
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Login & Register */}
          <div className="mt-4 flex flex-col gap-3">

            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="rounded border border-red-600 px-4 py-2 text-center text-red-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="rounded bg-red-600 px-4 py-2 text-center text-white"
            >
              Register
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

