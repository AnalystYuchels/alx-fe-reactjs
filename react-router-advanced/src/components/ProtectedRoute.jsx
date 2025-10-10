import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = false; // set to true after login for testing

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
