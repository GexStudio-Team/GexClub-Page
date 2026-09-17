'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '@/services/api';

const AuthContext = createContext({
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Inicializar sesión desde localStorage al cargar en el cliente
  useEffect(() => {
    const savedToken = localStorage.getItem('gex_token');
    const savedUser = localStorage.getItem('gex_user');

    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
        
        // Verificar token contra el backend
        authService.getMe()
          .then((updatedUser) => {
            setUser(updatedUser);
            localStorage.setItem('gex_user', JSON.stringify(updatedUser));
          })
          .catch(() => {
            logout();
          })
          .finally(() => setLoading(false));
        return;
      } catch (e) {
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    setToken(data.access_token);
    setUser(data.user);
    localStorage.setItem('gex_token', data.access_token);
    localStorage.setItem('gex_user', JSON.stringify(data.user));
    return data;
  };

  const register = async (fullName, email, password) => {
    const data = await authService.register(fullName, email, password);
    setToken(data.access_token);
    setUser(data.user);
    localStorage.setItem('gex_token', data.access_token);
    localStorage.setItem('gex_user', JSON.stringify(data.user));
    return data;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('gex_token');
    localStorage.removeItem('gex_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
