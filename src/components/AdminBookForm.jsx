import React, { useState, useEffect } from 'react';

const AdminBookForm = ({ initialData, onSubmit }) => {
  const [book, setBook] = useState(initialData || { title: '', author: '', price: '' });

  useEffect(() => {
    if (initialData) {
      setBook(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Book Title"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        value={book.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default AdminBookForm;
