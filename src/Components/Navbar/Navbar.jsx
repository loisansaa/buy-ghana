import React, { useState } from 'react';
import logo from '../../assets/buy-ghana-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartDropdown from '../Cart/CartDropdown.jsx';
import { useCart } from '../../Context/CartContext.jsx';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    if (q) navigate(`/products?q=${encodeURIComponent(q)}`);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setCartOpen((s) => !s);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
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
          <form onSubmit={handleSearch} className="hidden md:block">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                aria-label="Search products"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-3 py-2 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C72F61] w-56"
              />
            </div>
          </form>

          <div className="md:flex items-center space-x-3 ml-4 text-gray-700 relative">
            
            <div className="relative">
              <CartIcon onClick={toggleCart} className="cursor-pointer hover:text-[#C72F61] transition" />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C72F61] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalCount}</span>
              )}
              {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
            </div>
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
      {/* Mobile Menu */}
      <div className={`md:hidden backdrop-blur-md bg-white/80 shadow-md w-1/2 absolute top-full right-0 transition-all duration-300 ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
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
