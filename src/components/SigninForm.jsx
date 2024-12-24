import React, { useState } from "react";
import { signin } from "../services/api"; // API function for sign-in

function SigninForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin(formData);
      alert("Sign-in successful!");
    } catch (error) {
      alert("Sign-in failed!");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button className="bg-primary text-white px-4 py-2 rounded-md" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default SigninForm;
