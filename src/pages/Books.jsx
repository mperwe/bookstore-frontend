import React, { useEffect, useState } from "react";
import BookGrid from "../components/BookGrid";
import { fetchBooks } from "../services/api"; // API call to fetch books

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const data = await fetchBooks();
      setBooks(data);
    }
    loadBooks();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Books</h1>
      <BookGrid books={books} />
    </div>
  );
}

export default Books;
