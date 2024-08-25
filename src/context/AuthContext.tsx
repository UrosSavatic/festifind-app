import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  logout: () => void; // Dodajte funkciju za odjavu
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const logout = () => {
    setUser(null); // Postavite korisnika na null kada se odjavi
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
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