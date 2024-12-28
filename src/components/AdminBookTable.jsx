import React from 'react';

const AdminBookTable = ({ books, onEdit, onDelete }) => {
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Author</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td className="border px-4 py-2">{book.title}</td>
            <td className="border px-4 py-2">{book.author}</td>
            <td className="border px-4 py-2">${book.price}</td>
            <td className="border px-4 py-2">
              <button onClick={() => onEdit(book)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(book.id)} className="text-red-500 ml-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminBookTable;
