
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import {
  getStorage,
} from "../utils/storage";

import {
  loginUser,
  logoutUser,
} from "../services/authService";

const AuthContext = createContext(null);

const TOKEN_KEY = "job-portal-token";
const USER_KEY = "job-portal-user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check existing login
  useEffect(() => {
    const token = getStorage(TOKEN_KEY);
    const savedUser = getStorage(USER_KEY);

    if (token && savedUser) {
      setUser(savedUser);
    }

    setLoading(false);
  }, []);

  // Login
  const login = async (credentials) => {
    const data = await loginUser(credentials);
    setUser(data.user);
    return data;
  };

  // Logout
  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};
