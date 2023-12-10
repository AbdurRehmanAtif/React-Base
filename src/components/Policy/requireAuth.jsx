import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.jsX";

const RequireAuth = () => {
  const location = useLocation();
  const authObject = useAuth();

  return authObject.isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
