import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Complaint", id: "complaint" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all ${scrolled ? "bg-white shadow-md" : "bg-black bg-opacity-50"}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">CM</div>
          <span className={`text-2xl font-bold ${scrolled ? "text-gray-800" : "text-white"}`}>Civic Mate</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`cursor-pointer hover:text-blue-500 ${scrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}

          {/* Register as Provider */}
          <li>
            <Link
              to="/register"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-indigo-600 hover:to-blue-500 transition-all shadow-lg font-semibold"
            >
              Register as Provider
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 border rounded text-white border-white hover:bg-white hover:text-blue-500 text-2xl font-bold"
          >
            {isOpen ? "×" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="bg-white shadow-lg flex flex-col space-y-2 px-6 py-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}

          {/* Register as Provider */}
          <li>
            <Link
              to="/register"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 w-full text-center"
              onClick={() => setIsOpen(false)} // mobile menu close
            >
              Register as Provider
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
