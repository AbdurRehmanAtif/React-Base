import React, { createContext, useContext, useState } from "react";
import authServiceObject from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authService] = useState(authServiceObject);

  const contextValue = {
    authService,
    isLoggedIn: authService.isLoggedIn(),
    login: (payload) => authService.login(payload),
    logout: () => authService.logout(),
    isAuthenticated: () => authService.isAuthenticated(),
    getToken: () => authService.getToken(),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
