import axios from "axios";

// Set up the base URL for the API
const API_URL = "http://localhost:4500/api"; // your backend server

// Create an Axios instance with a common configuration
const axiosInstance = axios.create({
  baseURL: API_URL, // Base URL for all requests
  headers: {
    "Content-Type": "application/json", // Default Content-Type
  },
});

// Function to sign up a new user
export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error.response?.data || error.message);
    throw error; // Rethrow the error for further handling if needed
  }
};

// Function to sign in a user
export const signin = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/signin", userData);
    return response.data;
  } catch (error) {
    console.error("Error during signin:", error.response?.data || error.message);
    throw error;
  }
};

// Function to fetch books
export const fetchBooks = async () => {
  try {
    const response = await axiosInstance.get("/books");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error.response?.data || error.message);
    throw error;
  }
};

// Function to add a new book (admin functionality)
export const addBook = async (bookData) => {
  try {
    const response = await axiosInstance.post("/books/add", bookData, {
      headers: {
        "Content-Type": "multipart/form-data", // For file upload
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error.response?.data || error.message);
    throw error;
  }
};

// Function to update a book (admin functionality)
export const updateBook = async (id, bookData) => {
  try {
    const response = await axiosInstance.put(`/books/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error.response?.data || error.message);
    throw error;
  }
};

// Function to delete a book (admin functionality)
export const deleteBook = async (id) => {
  try {
    const response = await axiosInstance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting book:", error.response?.data || error.message);
    throw error;
  }
};
