import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../services/api";

function SigninForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(formData);
      alert("Sign-in successful!");
      navigate("/"); // Redirect to home page after sign-in
    } catch (error) {
      alert("Sign-in failed! Check your credentials.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
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
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-blue-500 hover:underline"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default SigninForm;
