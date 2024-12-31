import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext();

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("user"); // Default role
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); // Add username state

  // Mock login function (you'll replace this with real API call logic)
  const login = (role, name) => {
    setUserRole(role); // 'user' or 'admin'
    setUsername(name); // Set username
    setIsAuthenticated(true);
    localStorage.setItem("userRole", role); // Store role in localStorage
    localStorage.setItem("username", name); // Store username in localStorage
  };

  // Mock logout function
  const logout = () => {
    setUserRole("user");
    setUsername(""); // Clear username
    setIsAuthenticated(false);
    localStorage.removeItem("userRole"); // Remove role from localStorage
    localStorage.removeItem("username"); // Remove username from localStorage
  };

  // Mock persistent login check
  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    const savedUsername = localStorage.getItem("username");
    if (savedRole && savedUsername) {
      setUserRole(savedRole);
      setUsername(savedUsername);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
