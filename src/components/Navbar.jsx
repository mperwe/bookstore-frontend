import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bookstore</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/books" className="hover:text-yellow-400">Books</Link></li>
          <li><Link to="/cart" className="hover:text-yellow-400">Cart</Link></li>
          <li><Link to="/profile" className="hover:text-yellow-400">Profile</Link></li>
          <li><Link to="/signin" className="hover:text-yellow-400">Sign In</Link></li>
          <li><Link to="/signup" className="hover:text-yellow-400">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
