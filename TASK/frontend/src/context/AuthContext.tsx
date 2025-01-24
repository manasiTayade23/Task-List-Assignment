// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
interface AuthContextType {
  login: (email: string, password: string) => Promise<{access_token: string}>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  token: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const jwtToken = response.data.access_token;
      
      localStorage.setItem('token', jwtToken);
      setToken(jwtToken);
      setIsAuthenticated(true);

      return { access_token: jwtToken };
    } catch (error) {
      console.error('Login failed', error);
      throw new Error('Login failed');
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    try {
      await axios.post('/users/signup', { username, email, password });
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, signup, logout, isAuthenticated, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};