import React, { createContext } from 'react';
import { login } from '../services/ApiService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); 

  const handleLogin = async (username, password) => {
    try {
      const userData = await login(username, password);
      setIsLoggedIn(true);
      console.log(userData)
      return userData; 
    } catch (error) {
      console.log(error)
      throw error;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
