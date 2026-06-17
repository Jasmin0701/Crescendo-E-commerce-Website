"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const savedUser = localStorage.getItem('crescendo_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Could not load user from localStorage", e);
    }
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const mockUser = { id: 1, email, name: email.split('@')[0] };
    setUser(mockUser);
    localStorage.setItem('crescendo_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('crescendo_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isClient }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
