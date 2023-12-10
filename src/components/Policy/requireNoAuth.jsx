import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.jsX";

const RequireNoAuth = () => {
  const location = useLocation();
  const authObject = useAuth();

  return authObject.isAuthenticated() ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RequireNoAuth;
