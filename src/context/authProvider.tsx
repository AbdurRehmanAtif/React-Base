import React, { createContext, useContext, useState, ReactNode } from "react";
import authServiceObject from "../services/authService";

interface AuthContextType {
  isAuthenticated: Boolean;
  setIsAuthenticated: (value: boolean) => void;
  authService: typeof authServiceObject;
  isLoggedIn: boolean | undefined;
  login: (payload: any) => void;
  logout: () => void;
  getToken: () => string | null;
  role: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {

  const [authService] = useState(authServiceObject);
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());

  const contextValue: AuthContextType = {
    authService,
    isAuthenticated,
    setIsAuthenticated,
    isLoggedIn: authService.isLoggedIn(),
    login: (payload) => authService.login(payload),
    logout: () => authService.logout(),
    getToken: () => authService.getToken(),
    role: () => authService.getRole(),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
