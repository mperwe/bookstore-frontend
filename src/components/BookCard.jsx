import React from "react";

function BookCard({ book }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <img src={book.image} alt={book.title} className="h-40 w-full object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-600">by {book.author}</p>
      <p className="text-lg font-semibold mt-2">${book.price}</p>
      <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
        Add to Cart
      </button>
    </div>
  );
}

export default BookCard;
