import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API endpoint for searching books
      const response = await axios.get(`/api/books/search?query=${searchQuery}`);
      setSearchResult(response.data);
      console.log("Search Result:", response.data);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

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
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500"
          >
            Search
          </button>
        </form>
      </div>
      {searchResult && (
        <div className="bg-gray-700 p-4 mt-2">
          {searchResult.length > 0 ? (
            <ul>
              {searchResult.map((book) => (
                <li key={book.id} className="text-white">
                  {book.title} by {book.author}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No books found.</p>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
