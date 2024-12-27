import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AuthContext = createContext();

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('user'); // Default role
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login function (you'll replace this with real API call logic)
  const login = (role) => {
    setUserRole(role); // 'user' or 'admin'
    setIsAuthenticated(true);
  };

  // Mock logout function
  const logout = () => {
    setUserRole('user');
    setIsAuthenticated(false);
  };

  // Mock persistent login check
  useEffect(() => {
    // Example: Check localStorage or session for user info
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setUserRole(savedRole);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, isAuthenticated, login, logout, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
