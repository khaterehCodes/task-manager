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
  jwt: string;
  role: string;
}

type AuthContextType = {
  user: User | null;
  login: (jwt: string, role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (jwt: string, role: string) => {},
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
  const login = (jwt: string, role: string) => {
    const userData = { jwt, role };
    console.log('user test login');
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
