import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/api";

function SignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("Signup successful! You can now sign in.");
      navigate("/signin");
    } catch (error) {
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="block w-full px-4 py-2 mb-4 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="block w-full px-4 py-2 mb-4 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="block w-full px-4 py-2 mb-4 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/signin")}
          className="text-blue-500 hover:underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
}

export default SignupForm;
