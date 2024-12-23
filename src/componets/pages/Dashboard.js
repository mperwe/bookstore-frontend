import React from "react";
import BookList from "../Books/BookList";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Bookstore</h1>
      <BookList />
    </div>
  );
};

export default Dashboard;
