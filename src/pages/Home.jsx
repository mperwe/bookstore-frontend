import React from "react";
import silentp from "../assets/silentp.jpeg"; // Import the image
import queen from "../assets/queen.jpg";
import gonegirl from "../assets/gonegirl.jpeg";
import sharpobjects from "../assets/sharpobjects.jpg";
import littlelies from "../assets/littlelie.jpg";
import thegreat from "../assets/thegreat.jpg";
import the1984 from "../assets/the1984.jpg";
import kill from "../assets/kill.jpg";
import Prejudice from "../assets/prejudice.jpg";
import bookthief from "../assets/bookthief.jpeg";
import Sapiens from "../assets/sapiens.jpg";
import Educates  from "../assets/educates.jpg";
import becoming from "../assets/becoming.jpg";
import Subtle from "../assets/subtle.jpg";
import atomic from "../assets/atomic.jpg";



function Home() {
  const categories = [
    {
      title: "Crime and Thrillers",
      books: [
        {
          title: "The Silent Patient",
          description:
            "An edge-of-your-seat psychological thriller by Alex Michaelides. Discover the secrets that silence can hold.",
          image: silentp,
          price: 12.99,
        },
        {
          title: "The Nnaabagereka",
          description:
            "The Nnaabagereka Queen Sylvia Nagginda Luswata: Life. Passion. Duty. by Queen Sylvia Nagginda Luswata.",
          image: queen,
          price: 14.99,
        },
        {
          title: "Gone Girl",
          description:
            "A suspenseful tale of deception and marriage by Gillian Flynn. Expect the unexpected!",
          image: gonegirl,
          price: 16.50,
        },
        {
          title: "Sharp Objects",
          description:
            "A chilling mystery by Gillian Flynn. Can you trust your own family?",
          image: sharpobjects,
          price: 13.75,
        },
        {
          title: "Big Little Lies",
          description:
            "A novel of secrets and lies by Liane Moriarty. Perfect for fans of psychological drama.",
          image: littlelies,
          price: 18.00,
        },
      ],
    },
    {
      title: "Fiction",
      books: [
        {
          title: "The Great Gatsby",
          description:
            "A dazzling portrait of the Jazz Age by F. Scott Fitzgerald. The American Dream never looked so alluring.",
          image: thegreat,
          price: 11.99,
        },
        {
          title: "1984",
          description:
            "A dystopian masterpiece by George Orwell. Big Brother is always watching.",
          image: the1984,
          price: 13.25,
        },
        {
          title: "To Kill a Mockingbird",
          description:
            "A touching story of justice and humanity by Harper Lee. A must-read classic.",
          image: kill,
          price: 15.00,
        },
        {
          title: "Pride and Prejudice",
          description:
            "A timeless romantic tale by Jane Austen. Love, wit, and social commentary combine beautifully.",
          image: Prejudice,
          price: 10.50,
        },
        {
          title: "The Book Thief",
          description:
            "A heartwarming story set during WWII by Markus Zusak. Meet the power of words.",
          image: bookthief,
          price: 14.00,
        },
      ],
    },
    {
      title: "Non-Fiction",
      books: [
        {
          title: "Sapiens",
          description:
            "A fascinating history of humankind by Yuval Noah Harari. Understand where we came from and where we’re going.",
          image: Sapiens,
          price: 20.00,
        },
        {
          title: "Educated",
          description:
            "An inspiring memoir by Tara Westover. A journey from isolation to education.",
          image: Educates,
          price: 18.50,
        },
        {
          title: "Becoming",
          description:
            "A deeply personal memoir by Michelle Obama. Discover the journey of a First Lady.",
          image: becoming,
          price: 22.00,
        },
        {
          title: "The Subtle Art of Not Giving a F*ck",
          description:
            "A counterintuitive guide to living a good life by Mark Manson.",
          image: Subtle,
          price: 16.75,
        },
        {
          title: "Atomic Habits",
          description:
            "An actionable guide to building good habits by James Clear. Transform your life one step at a time.",
          image: atomic,
          price: 19.99,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center drop-shadow-md">
          e-Bookstorez
        </h1>
        <p className="text-center mt-4 text-lg font-medium">
          Explore our vast collection and find your next favorite book.
        </p>
      </div>

      {/* Categories Section */}
      {categories.map((category) => (
        <div key={category.title} className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Best Sellers from {category.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {category.books.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-yellow-400 flex flex-col"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h- object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
                <div className="flex flex-grow flex-col justify-between mt-4">
                  <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {book.description}
                  </p>
                  <p className="text-lg font-semibold text-yellow-600 mt-2">
                    €{book.price.toFixed(2)}
                  </p>
                </div>
                <button className="bg-yellow-500 text-white mt-4 px-4 py-2 text-sm rounded-md hover:bg-yellow-600 transition-all duration-300 self-end">
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
