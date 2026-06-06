"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types/global";

type AuthPropsType = {
  children: ReactNode;
};


type AuthContextType = {
  user: User | null;
  login: (
    jwt: string,
    role: string,
    firstName: string,
    lastName: string,
  ) => void;
  logout: () => void;
  profileInfo: (info: { firstName: string; lastName: string }) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (jwt: string, role: string, firstName: string, lastName: string) => {},
  logout: () => {},
  profileInfo: (info: { firstName: string; lastName: string }) => {},
});

export const AuthProvider = ({ children }: AuthPropsType) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const saveUser = localStorage.getItem("user");
    if (saveUser) {
      setUser(JSON.parse(saveUser));
    }
  }, []);
  const login = (
    jwt: string,
    role: string,
    firstName: string,
    lastName: string,
  ) => {
    const userData = { jwt, role, firstName, lastName };
    console.log("user test login");
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const profileInfo = (info: { firstName: string; lastName: string }) => {
    if (user) {
      const updateUser = { ...user, ...info };
      setUser(updateUser);
      localStorage.setItem("user", JSON.stringify(updateUser));
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, profileInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
