import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Navbar = () => {
  const { userRole, setUserRole } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-bold">BookStore</Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/books" className="hover:text-gray-400">Books</Link>
            {userRole === 'user' && <Link to="/cart" className="hover:text-gray-400">Cart</Link>}
            {userRole === 'admin' && <Link to="/admin" className="hover:text-gray-400">Admin Panel</Link>}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 text-black rounded-md"
          />
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
          <button
            onClick={() => setUserRole(userRole === 'user' ? 'admin' : 'user')}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Switch to {userRole === 'user' ? 'Admin' : 'User'}
          </button>
          <Link to="/signin" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            Login
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <Link to="/books" className="block hover:text-gray-400">Books</Link>
          {userRole === 'user' && <Link to="/cart" className="block hover:text-gray-400">Cart</Link>}
          {userRole === 'admin' && <Link to="/admin" className="block hover:text-gray-400">Admin Panel</Link>}
          <Link to="/signin" className="block mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
