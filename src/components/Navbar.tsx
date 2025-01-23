import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-playfair text-2xl font-bold text-primary">
            Pain de Vie
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};