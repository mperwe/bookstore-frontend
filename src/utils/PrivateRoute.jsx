import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './auth';  // Assuming you are using a custom auth hook or context

const PrivateRoute = () => {
  const { user } = useAuth(); // Get the user from context or hook

  // If there is no user, redirect to the login page
  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;  // If authenticated, render the child route (AdminPanel)
};

export default PrivateRoute;
