import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication hook
export function useAuth() {
  // You can adjust this value for testing:
  const user = { loggedIn: false }; // change to true to simulate a logged-in user
  return user;
}

export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth.loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
