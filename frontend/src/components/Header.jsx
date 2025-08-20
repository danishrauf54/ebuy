import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { itemCount } = useCart();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">ebuy</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="items-center hidden space-x-8 md:flex">
            <Link to="/" className="text-gray-700 transition-colors hover:text-gray-900">Home</Link>
            <Link to="/contact" className="text-gray-700 transition-colors hover:text-gray-900">Contact</Link>
            <Link to="/about" className="text-gray-700 transition-colors hover:text-gray-900">About</Link>
            {!user && (
              <Link to="/signup" className="text-gray-700 transition-colors hover:text-gray-900">Sign Up</Link>
            )}
            {user && (
              <Link to="/profile" className="text-gray-700 transition-colors hover:text-gray-900">Profile</Link>
            )}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="flex-1 hidden max-w-md mx-8 lg:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute transform -translate-y-1/2 right-3 top-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Icons */}
          <div className="flex items-centerjustify-evenly sm:space-x-2">
            {/* Wishlist */}
            <button className="relative p-2 text-gray-700 transition-colors hover:text-gray-900">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-700 transition-colors hover:text-gray-900">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5 sm:w-6 sm:h-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M6 6h15l-1.5 9H8.5L6 6zM6 6L4 3H2m5 16a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"
  />
</svg>




              {itemCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>
            
            {/* User Profile / Login */}
            {/* User Profile / Login */}
{user ? (
  <div className="flex items-center space-x-3">
    <div className="items-center hidden space-x-2 sm:flex">
      <span className="text-sm text-gray-700">Welcome, {user.name}</span>
    </div>
    <Link
      to="/profile"
      className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white transition-colors bg-green-500 rounded-full hover:bg-green-600"
      aria-label="User Profile"
    >
      {user.name.charAt(0).toUpperCase()}
    </Link>
    <button
      onClick={handleLogout}
      className="hidden text-sm text-gray-700 transition-colors sm:block hover:text-red-600"
    >
      Logout
    </button>
  </div>
) : (
  <Link
    to="/login"
    className="flex items-center justify-center px-3 py-1 text-gray-700 transition-colors bg-gray-200 rounded-full hover:bg-gray-300"
  >
    Account
  </Link>
)}

   
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 transition-colors md:hidden hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="pb-4 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="absolute transform -translate-y-1/2 right-3 top-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="py-4 border-t border-gray-200 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 transition-colors hover:text-gray-900">Home</Link>
              <Link to="/contact" className="text-gray-700 transition-colors hover:text-gray-900">Contact</Link>
              <Link to="/about" className="text-gray-700 transition-colors hover:text-gray-900">About</Link>
              <Link to="/cart" className="flex items-center justify-between text-gray-700 transition-colors hover:text-gray-900">
                Cart
                {itemCount > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </Link>
              {!user ? (
                <>
                  <Link to="/signup" className="text-gray-700 transition-colors hover:text-gray-900">Sign Up</Link>
                  <Link to="/login" className="text-gray-700 transition-colors hover:text-gray-900">Login</Link>
                </>
              ) : (
                <>
                  <Link to="/profile" className="text-gray-700 transition-colors hover:text-gray-900">Profile</Link>
                  <div className="text-gray-700">Welcome, {user.name}</div>
                  <button
                    onClick={handleLogout}
                    className="text-left text-red-600 transition-colors hover:text-red-700"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

