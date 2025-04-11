
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Heart, Phone, BookOpen, Bell } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="healthcare-container">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-healthcare-primary" />
            <span className="font-bold text-xl text-healthcare-primary">
              Gram Seva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-healthcare-primary transition-colors">
              Home
            </Link>
            <Link to="/patient-dashboard" className="text-gray-600 hover:text-healthcare-primary transition-colors">
              Patient Portal
            </Link>
            <Link to="/doctor-consultation" className="text-gray-600 hover:text-healthcare-primary transition-colors">
              Consult Doctor
            </Link>
            <Link to="/emergency-help" className="text-gray-600 hover:text-healthcare-primary transition-colors">
              Emergency
            </Link>
            <LanguageSwitcher />
            <Link to="/patient-dashboard" className="healthcare-button-primary flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-600 hover:text-healthcare-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/patient-dashboard" 
              className="block text-gray-600 hover:text-healthcare-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Patient Portal
            </Link>
            <Link 
              to="/doctor-consultation" 
              className="block text-gray-600 hover:text-healthcare-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Consult Doctor
            </Link>
            <Link 
              to="/emergency-help" 
              className="block text-gray-600 hover:text-healthcare-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Emergency
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <Link 
              to="/patient-dashboard"
              className="healthcare-button-primary inline-flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4 mr-2" />
              <span>Sign In</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
