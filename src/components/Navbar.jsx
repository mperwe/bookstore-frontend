import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';


const Navbar = () => {
  const { userRole, setUserRole } = useAuth();

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
          <Link to="/books" className="hover:text-gray-400">
            Books
          </Link>
          {userRole === 'user' && (
            <Link to="/cart" className="hover:text-gray-400">
              Cart
            </Link>
          )}
          {userRole === 'admin' && (
            <Link to="/admin-panel" className="hover:text-gray-400">
              Admin Panel
            </Link>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
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
