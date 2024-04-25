import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authProvider";

/**
 * AuthPolicy provides reusable policy functions for route authentication.
 * It includes RequireAuth and RequireNoAuth policies to control access based on authentication status.
 */
const AuthPolicy = {

    /**
     * RequireAuth enforces authentication by redirecting unauthenticated users to the login page.
     * @returns {JSX.Element} - Returns Outlet if authenticated, otherwise redirects to login page.
     */
    RequireAuth: () => {
        const location = useLocation();
        const authObject = useAuth();

        return authObject.isAuthenticated ? (
            <Outlet />
        ) : (
            <Navigate to="/login" state={{ from: location }} replace />
        );
    },

    /**
     * RequireNoAuth enforces non-authentication by redirecting authenticated users to the home page.
     * @returns {JSX.Element} - Returns Outlet if not authenticated, otherwise redirects to home page.
     */
    RequireNoAuth: () => {
        const location = useLocation();
        const authObject = useAuth();

        return authObject.isAuthenticated ? (
            <Navigate to="/" state={{ from: location }} replace />
        ) : (
            <Outlet />
        );
    },
};

export default AuthPolicy;
