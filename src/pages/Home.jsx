import React from "react";

function Home() {
  const categories = [
    {
      title: "Crime and Thrillers",
      books: [
        {
          title: "The Silent Patient",
          description: "A gripping psychological thriller by Alex Michaelides.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Girl with the Dragon Tattoo",
          description: "A mystery novel by Stieg Larsson.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Gone Girl",
          description: "A suspenseful thriller by Gillian Flynn.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Fiction",
      books: [
        {
          title: "The Great Gatsby",
          description: "A classic novel by F. Scott Fitzgerald.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "1984",
          description: "A dystopian masterpiece by George Orwell.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "To Kill a Mockingbird",
          description: "A compelling story by Harper Lee.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Non-Fiction",
      books: [
        {
          title: "Sapiens",
          description: "A brief history of humankind by Yuval Noah Harari.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Educated",
          description: "A memoir by Tara Westover.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Becoming",
          description: "A personal story by Michelle Obama.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Crime and Thrillers Graphic Novels",
      books: [
        {
          title: "Batman: Year One",
          description: "A classic graphic novel by Frank Miller.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Watchmen",
          description: "A groundbreaking graphic novel by Alan Moore.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Killing Joke",
          description: "A chilling Batman story by Alan Moore.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Healthy and Awareness",
      books: [
        {
          title: "The Blue Zones",
          description: "Lessons for living longer by Dan Buettner.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "How Not to Die",
          description: "Discovering foods scientifically proven to prevent disease by Michael Greger.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Wellness Project",
          description: "A wellness guide by Phoebe Lapine.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center drop-shadow-md">e-Bookstorez</h1>
        <p className="text-center mt-4 text-lg font-medium">
          Explore our vast collection and find your next favorite book.
        </p>
      </div>

      {/* Categories Section */}
      {categories.map((category) => (
        <div key={category.title} className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Best Sellers from {category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.books.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-yellow-400"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold mt-4 text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                <button className="bg-yellow-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300">
                  Add to Basket
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
