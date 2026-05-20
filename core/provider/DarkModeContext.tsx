"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type DarkModeProps = {
  children: ReactNode;
};

interface DarkContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const DarkModeContext = createContext<DarkContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: DarkModeProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saveMode = localStorage.getItem("darkMode");
      if (saveMode !== null) {
        const isDark = saveMode === "true";
        setDarkMode(isDark);
      }
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
