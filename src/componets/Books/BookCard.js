import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border rounded shadow p-4">
      <img src={book.image} alt={book.title} className="h-48 w-full object-cover" />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-blue-600 font-bold">${book.price}</p>
      <button className="mt-2 bg-blue-600 text-white py-1 px-2 rounded">Add to Cart</button>
    </div>
  );
};

export default BookCard;
