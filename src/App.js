import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminPanel from "./pages/AdminPanel"; // Import AdminPanel
import PrivateRoute from "./utils/PrivateRoute"; // Import PrivateRoute

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protect /admin route using PrivateRoute */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
