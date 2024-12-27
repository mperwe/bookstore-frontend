import React, { useState } from 'react';
import AdminBookForm from '../components/AdminBookForm';
import AdminBookTable from '../components/AdminBookTable';

const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const handleEditBook = (book) => {
    setBooks(books.map((b) => (b.id === book.id ? book : b)));
    setEditingBook(null);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Admin Panel</h1>
      {editingBook ? (
        <AdminBookForm initialData={editingBook} onSubmit={handleEditBook} />
      ) : (
        <AdminBookForm onSubmit={handleAddBook} />
      )}
      <AdminBookTable books={books} onEdit={setEditingBook} onDelete={handleDeleteBook} />
    </div>
  );
};

export default AdminPanel;
