import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api'; // Import fetchBooks function

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books when the component mounts
  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);  // Store fetched books in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  // Handle adding book to cart
  const handleAddToCart = (book) => {
    // Assuming you're storing cart in localStorage or Context API
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${book.title} has been added to your cart.`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-600">{book.author}</p>
              <p className="mt-2 text-lg font-bold">${book.price}</p>
              <button
                onClick={() => handleAddToCart(book)}
                className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
