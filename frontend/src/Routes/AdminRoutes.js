import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  return auth && auth.isAdmin ? children : <Navigate to="/signin" />;
}
