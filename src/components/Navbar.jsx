import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    try {
      const response = await axios.get(`/api/books/search?query=${searchQuery}`);
      setSearchResult(response.data);
      if (response.data.length === 0) {
        setErrorMessage("No books found.");
      }
    } catch (error) {
      console.error("Error searching books:", error);
      setErrorMessage("Failed to fetch books. Please try again.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/books" className="text-2xl font-bold hover:text-yellow-400">
            |-Book Store-|
          </Link>

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
      </nav>

      {/* Search Results */}
      <div className="bg-gray-700 p-4 mt-2">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {searchResult.length > 0 && (
          <ul>
            {searchResult.map((book) => (
              <li key={book.id} className="text-white">
                {book.title} by {book.author}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
