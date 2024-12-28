import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth'; // Import the useAuth hook

const Navbar = () => {
  const { userRole, setUserRole } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  // Categories for the secondary navbar
  const categories = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Mystery', 'Romance'];

  return (
    <>
      {/* Primary Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-bold">
            BookStore
          </Link>
          <div className="hidden md:flex space-x-4"> {/* Show links on large screens */}
            <Link to="/books" className="hover:text-gray-400">
              Books
            </Link>
            {userRole === 'user' && (
              <Link to="/cart" className="hover:text-gray-400">
                Cart
              </Link>
            )}
            {userRole === 'admin' && (
              <Link to="/admin" className="hover:text-gray-400">
                Admin Panel
              </Link>
            )}
          </div>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Search Bar and User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 text-black rounded-md"
          />
          <Link to="/profile" className="hover:text-gray-400">
            Profile
          </Link>
          <button
            onClick={() => setUserRole(userRole === 'user' ? 'admin' : 'user')}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Switch to {userRole === 'user' ? 'Admin' : 'User'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu: Toggle visibility with state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 text-white p-4`}>
        <Link to="/books" className="block hover:text-gray-400">
          Books
        </Link>
        {userRole === 'user' && (
          <Link to="/cart" className="block hover:text-gray-400">
            Cart
          </Link>
        )}
        {userRole === 'admin' && (
          <Link to="/admin" className="block hover:text-gray-400">
            Admin Panel
          </Link>
        )}
        <div className="flex items-center space-x-4 mt-4">
          <input
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 text-black rounded-md"
          />
          <Link to="/profile" className="hover:text-gray-400">
            Profile
          </Link>
          <button
            onClick={() => setUserRole(userRole === 'user' ? 'admin' : 'user')}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Switch to {userRole === 'user' ? 'Admin' : 'User'}
          </button>
        </div>
      </div>

      {/* Secondary Navbar: Categories */}
      <nav className="bg-gray-700 text-white p-2">
        <div className="flex justify-center space-x-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.toLowerCase()}`}
              className="hover:text-gray-400"
            >
              {category}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
