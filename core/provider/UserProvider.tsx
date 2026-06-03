'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserType {
  name: string;
}

type UserContextPropsType = {
  children: ReactNode;
};

interface UserContextProvider {
  user: UserType | null;
  setUser: (value: UserType | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProvider | null>(null);

export const UserProvider = ({ children }: UserContextPropsType) => {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    const saveUser = localStorage.getItem("user");
    if (saveUser) {
      try {
        const parseUser = JSON.parse(saveUser);
        setUser(parseUser);
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextProvider {
  const existContext = useContext(UserContext);
  if (!existContext) {
    throw new Error("error in user contex");
  }
  return existContext;
}
