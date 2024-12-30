import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

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
  const { userRole, setUserRole } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-bold">
            BookStore
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/books" className="hover:text-gray-400">
              Books
            </Link>
            <Link to="/categories" className="hover:text-gray-400">
              Categories
            </Link>
            {userRole === "admin" && (
              <Link to="/admin" className="hover:text-gray-400">
                Admin Panel
              </Link>
            )}
          </div>
        </div>

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
            onClick={() => setUserRole(userRole === "user" ? "admin" : "user")}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Switch to {userRole === "user" ? "Admin" : "User"}
          </button>
          <Link to="/signin" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            Login
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Dropdown Categories Navbar */}
      <div className="bg-gray-700 text-white p-2 flex justify-center space-x-4">
        {Object.keys(categories).map((categoryName) => (
          <div
            className="relative group"
            key={categoryName}
            onMouseEnter={() => handleDropdownOpen(categoryName)}
          >
            <button className="px-4 py-2 hover:bg-gray-600 rounded">
              {categoryName}
            </button>
            {openDropdown === categoryName && (
              <div
                className="absolute left-0 mt-2 flex flex-col bg-white text-black rounded-md shadow-lg p-4 w-72"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{categoryName}</span>
                  <button
                    onClick={handleDropdownClose}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖
                  </button>
                </div>
                {categories[categoryName].map(({ name, link }) => (
                  <Link
                    to={link}
                    key={name}
                    onClick={handleCategoryClick}
                    className="block py-1 px-2 hover:bg-gray-100 rounded text-left"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <Link to="/books" className="block hover:text-gray-400">
            Books
          </Link>
          <Link to="/categories" className="block hover:text-gray-400">
            Categories
          </Link>
          {userRole === "admin" && (
            <Link to="/admin" className="block hover:text-gray-400">
              Admin Panel
            </Link>
          )}
          <Link to="/signin" className="block mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
