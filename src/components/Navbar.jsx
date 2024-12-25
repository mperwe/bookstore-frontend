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
      const response = await axios.get(`/api/books/add/search?query=${searchQuery}`);
      setSearchResult(response.data);
      console.log("Search Result:", response.data);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Store Name linked to '/books' */}
        <Link to="/books" className="text-2xl font-bold hover:text-yellow-400">
          |-Book Store-|
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center flex-grow justify-center mx-4">
          <input
            type="text"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white focus:outline-none w-1/2"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500"
          >
            Search
          </button>
        </form>

        {/* Register and Login Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </Link>
          <Link
            to="/signin"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Search Results */}
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
