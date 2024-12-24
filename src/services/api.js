import axios from "axios";

// Set up the base URL for the API
const API_URL = "http://localhost:3000/api"; // my backend server

// Function to sign up a new user
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error.response?.data || error.message);
    throw error;
  }
};

// Function to sign in a user
export const signin = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during signin:", error.response?.data || error.message);
    throw error;
  }
};

// Function to fetch books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error.response?.data || error.message);
    throw error;
  }
};

// Function to add a new book (admin functionality)
export const addBook = async (bookData) => {
  try {
    const response = await axios.post(`${API_URL}/books/add`, bookData, {
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
    const response = await axios.put(`${API_URL}/books/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error.response?.data || error.message);
    throw error;
  }
};

// Function to delete a book (admin functionality)
export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting book:", error.response?.data || error.message);
    throw error;
  }
};
