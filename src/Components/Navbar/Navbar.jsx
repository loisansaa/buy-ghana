import React, { useState } from 'react';
import logo from '../../assets/buy-ghana-logo.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="BuyGhana Logo" className="h-12 w-32 object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-[#C72F61] font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-[#C72F61] font-medium">Products</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#C72F61] font-medium">About Us</Link>
          <Link to="/support" className="text-gray-700 hover:text-[#C72F61] font-medium">Support</Link>
        </div>

        {/* Actions & Icons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline bg-[#C72F61] text-white px-4 py-2 rounded hover:bg-[#C72F61] transition">
            Login
          </button>
          <button className="hidden md:inline bg-white border border-[#C72F61] text-[#C72F61] px-4 py-2 rounded hover:bg-[#C72F61] hover:text-white transition">
            Sign Up
          </button>

          <div className="hidden md:flex items-center space-x-3 ml-4 text-gray-700">
            <SearchIcon className="cursor-pointer hover:text-[#C72F61] transition" />
            <CartIcon className="cursor-pointer hover:text-[#C72F61] transition" />
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden ml-4">
            <button onClick={toggleMenu}>
              {isOpen ? <CloseIcon className="text-gray-700" /> : <MenuIcon className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-transparent shadow-md w-1/2 absolute top-full right-0 transition-all duration-300 ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="text-gray-700 hover:text-[#C72F61] font-medium">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-[#C72F61] font-medium">Products</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#C72F61] font-medium">About Us</Link>
          <Link to="/support" className="text-gray-700 hover:text-[#C72F61] font-medium">Support</Link>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
