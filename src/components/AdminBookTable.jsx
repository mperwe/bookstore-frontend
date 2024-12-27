import React from 'react';

const AdminBookTable = ({ books, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>${book.price}</td>
            <td>
              <button onClick={() => onEdit(book)} className="btn-secondary">Edit</button>
              <button onClick={() => onDelete(book.id)} className="btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminBookTable;
