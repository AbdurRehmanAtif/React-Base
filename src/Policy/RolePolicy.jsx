import { useEffect, useState } from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authProvider.tsx";

/**
 * RolePolicy provides a policy function to verify user roles for access control.
 */
const RolePolicy = {

  /**
   * verifyRole enforces role-based access control by verifying user role.
   * Redirects users to the login page if authentication fails or if the user's role is not SUPERADMIN.
   * @returns {JSX.Element} - Returns Outlet if authenticated with SUPERADMIN role, otherwise redirects to login page.
   */
  verifyRole: () => {
    const location = useLocation();
    const authObject = useAuth();

    return authObject.isAuthenticated() && authObject.role() === 'SUPERADMIN' ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
}

export default RolePolicy;
