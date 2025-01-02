import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

// Categories data
const categories = {
  General: [
    { name: "Fiction", link: "/signin" },
    { name: "Non-Fiction", link: "/signin" },
    { name: "Children’s Books", link: "/signin" },
    { name: "Young Adult (YA)", link: "/signup" },
    { name: "Comics & Graphic Novels", link: "/signup" },
    { name: "Science & Technology", link: "/signup" },
    { name: "Health & Wellness", link: "/" },
    { name: "Education & Academics", link: "/" },
    { name: "Religion & Spirituality", link: "/" },
    { name: "Biographies & Memoirs", link: "/" },
  ],
  Specialized: [
    { name: "Business & Finance", link: "/" },
    { name: "Self-Help & Motivation", link: "/" },
    { name: "Cooking & Recipes", link: "/" },
    { name: "Travel & Adventure", link: "/" },
    { name: "Art & Photography", link: "/" },
    { name: "Science Fiction & Fantasy", link: "/" },
    { name: "Romance & Relationships", link: "/" },
    { name: "Mystery & Thrillers", link: "/" },
    { name: "History & Politics", link: "/" },
    { name: "True Crime", link: "/" },
  ],
  AdditionalCreative: [
    { name: "Poetry", link: "/" },
    { name: "Horror", link: "/" },
    { name: "Humor & Comedy", link: "/" },
    { name: "Short Stories", link: "/" },
    { name: "Language & Linguistics", link: "/" },
  ],
};

const Navbar = () => {
  const { username, isAuthenticated, logout } = useAuth(); // Access username and logout function
  const [openDropdown, setOpenDropdown] = useState("");

  const handleDropdownOpen = (category) => {
    setOpenDropdown(category);
  };

  const handleDropdownClose = () => {
    setOpenDropdown("");
  };

  const handleCategoryClick = () => {
    handleDropdownClose();
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-bold">
            BookStore
          </Link>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="flex-grow flex justify-center">
          <input
            type="text"
            placeholder="Search books..."
            className="w-1/2 px-4 py-2 text-black rounded-md"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="hover:text-gray-400">Hello, {username}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/signin" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
              Login
            </Link>
          )}
          <Link to="/profile" className="hover:text-gray-400">
            <FaUserCircle size={24} />
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            <FaShoppingCart size={24} />
          </Link>
        </div>
      </nav>

      {/* Categories Bar */}
      <div className="bg-gray-700 text-white p-2">
        <div className="flex justify-start space-x-4 pl-4">
          {Object.keys(categories).map((categoryName) => (
            <div
              key={categoryName}
              className="relative group"
              onMouseEnter={() => handleDropdownOpen(categoryName)}
              onMouseLeave={handleDropdownClose}
            >
              <button className="hover:underline">{categoryName}</button>
              {openDropdown === categoryName && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg p-4 w-64 z-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">{categoryName}</span>
                    <button
                      onClick={handleDropdownClose}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✖
                    </button>
                  </div>
                  <div>
                    {categories[categoryName].map(({ name, link }) => (
                      <Link
                        to={link}
                        key={name}
                        onClick={handleCategoryClick}
                        className="block py-1 px-2 hover:bg-gray-100 rounded"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
