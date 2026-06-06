"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type DarkModeprops = {
  children: ReactNode;
};

interface DarkModeType {
  darkMode: boolean;
  buttonDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeType>({
  darkMode: false,
  buttonDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: DarkModeprops) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [hydrate, setHydarte] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saveMode = localStorage.getItem("darkMode");
      if (saveMode !== null) {
        const isDark = saveMode === "true";
        setDarkMode(isDark);
      }
    }
    setHydarte(true);
  }, []);
  useEffect(() => {
    if (!hydrate) return;
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode,hydrate]);

  const buttonDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, buttonDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDark = () => useContext(DarkModeContext);
