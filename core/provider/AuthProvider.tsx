"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthPropsType = {
  children: ReactNode;
};

interface User {
  token: string;
  role: string;
}

type AuthContextType = {
  user: User | null;
  login: (token: string, role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (toke: string, role: string) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthPropsType) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const saveUser = localStorage.getItem("user");
    if (saveUser) {
      setUser(JSON.parse(saveUser));
    }
  }, []);
  const login = (token: string, role: string) => {
    const userData = { token, role };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth =()=> useContext(AuthContext);
