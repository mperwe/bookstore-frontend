import React from "react";

function Home() {
  const categories = [
    {
      title: "Crime and Thrillers",
      books: [
        {
          title: "The Silent Patient",
          description: "An edge-of-your-seat psychological thriller by Alex Michaelides. Discover the secrets that silence can hold.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Girl with the Dragon Tattoo",
          description: "A gripping mystery novel by Stieg Larsson. Dive into the dark and twisted story of intrigue and revenge.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Gone Girl",
          description: "A suspenseful tale of deception and marriage by Gillian Flynn. Expect the unexpected!",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Sharp Objects",
          description: "A chilling mystery by Gillian Flynn. Can you trust your own family?",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Big Little Lies",
          description: "A novel of secrets and lies by Liane Moriarty. Perfect for fans of psychological drama.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Fiction",
      books: [
        {
          title: "The Great Gatsby",
          description: "A dazzling portrait of the Jazz Age by F. Scott Fitzgerald. The American Dream never looked so alluring.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "1984",
          description: "A dystopian masterpiece by George Orwell. Big Brother is always watching.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "To Kill a Mockingbird",
          description: "A touching story of justice and humanity by Harper Lee. A must-read classic.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Pride and Prejudice",
          description: "A timeless romantic tale by Jane Austen. Love, wit, and social commentary combine beautifully.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Book Thief",
          description: "A heartwarming story set during WWII by Markus Zusak. Meet the power of words.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Non-Fiction",
      books: [
        {
          title: "Sapiens",
          description: "A fascinating history of humankind by Yuval Noah Harari. Understand where we came from and where we’re going.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Educated",
          description: "An inspiring memoir by Tara Westover. A journey from isolation to education.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Becoming",
          description: "A deeply personal memoir by Michelle Obama. Discover the journey of a First Lady.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Subtle Art of Not Giving a F*ck",
          description: "A counterintuitive guide to living a good life by Mark Manson.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Atomic Habits",
          description: "An actionable guide to building good habits by James Clear. Transform your life one step at a time.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Crime and Thrillers Graphic Novels",
      books: [
        {
          title: "Batman: Year One",
          description: "A gritty retelling of Batman’s origin by Frank Miller. Witness the rise of the Dark Knight.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Watchmen",
          description: "A groundbreaking graphic novel by Alan Moore. Heroes and morality collide in a compelling tale.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Killing Joke",
          description: "A chilling Joker-centric story by Alan Moore. How far can one bad day push a man?",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Sin City: The Hard Goodbye",
          description: "A noir graphic novel by Frank Miller. Dark, violent, and visually stunning.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "V for Vendetta",
          description: "An iconic graphic novel by Alan Moore. A tale of rebellion and identity.",
          image: "https://via.placeholder.com/100",
        },
      ],
    },
    {
      title: "Healthy and Awareness",
      books: [
        {
          title: "The Blue Zones",
          description: "Secrets to living longer by Dan Buettner. Discover the world’s healthiest communities.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "How Not to Die",
          description: "Foods scientifically proven to prevent disease by Michael Greger. Improve your health with every bite.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Wellness Project",
          description: "A practical guide to wellness by Phoebe Lapine. Balance your life one step at a time.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "Why We Sleep",
          description: "Unlocking the power of sleep by Matthew Walker. Improve your nights and your days.",
          image: "https://via.placeholder.com/100",
        },
        {
          title: "The Mind-Gut Connection",
          description: "A fascinating look into how gut health affects mental health by Dr. Emeran Mayer.",
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {category.books.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-yellow-400"
                style={{ height: "450px", width: "200px" }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-md font-bold mt-3 text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">{book.description}</p>
                <button className="bg-yellow-500 text-white mt-3 px-4 py-2 text-sm rounded-md hover:bg-yellow-600 transition-all duration-300">
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
