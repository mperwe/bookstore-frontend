import React from "react";

function Home() {
  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-16 rounded-lg shadow-md">
        <h1 className="text-5xl font-extrabold text-center drop-shadow-md">
          e-Bookstorez
        </h1>
        <p className="text-center mt-4 text-lg font-medium">
          Explore our vast collection and find your next favorite book.
        </p>
      </div>

      {/* Categories Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["Fiction", "Non-Fiction", "Science", "Biographies", "Fantasy", "Romance", "Mystery", "Classics"].map(
            (category) => (
              <div
                key={category}
                className="bg-gray-100 hover:bg-yellow-100 text-center py-4 rounded-md shadow-md cursor-pointer transition-all duration-300"
              >
                <span className="text-lg font-medium">{category}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
