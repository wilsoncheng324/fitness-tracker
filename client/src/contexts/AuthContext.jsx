import React, { createContext, useContext, useState } from 'react';
import AuthService from '../utils/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(AuthService.loggedIn());

  const login = (token) => {
    AuthService.login(token);
    setLoggedIn(true);
  };

  const logout = () => {
    AuthService.logout();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
