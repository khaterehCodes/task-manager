"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { themes } from "../constants/global";

type ThemePropsType = {
  children: ReactNode;
};

interface ThemeContextType {
  selectedColor: number;
  setSelectedColor: (value: number) => void;
  currentTheme: string;
}

const ThemeContext = createContext<ThemeContextType>({
  selectedColor: 9,
  setSelectedColor: () => {},
  currentTheme: "#208D8E",
});

export const ThemeProvider = ({ children }: ThemePropsType) => {
  const [selectedColor, setSelectedColor] = useState<number>(9);
  const [hydrate, setHydrate] = useState<boolean>(false);
  const currentTheme =
    themes.find((c) => c.id === selectedColor)?.color || themes[0].color;
  useEffect(() => {
    const saveColor = localStorage.getItem("colortheme");
    if (saveColor) {
      setSelectedColor(Number(saveColor));
    }
    setHydrate(true);
  }, []);
  useEffect(() => {
    if (!hydrate) return;
    localStorage.setItem("colortheme", selectedColor.toString());
    document.documentElement.style.setProperty("--theme-color", currentTheme);
  }, [selectedColor, currentTheme, hydrate]);
  return (
    <ThemeContext.Provider
      value={{ selectedColor, setSelectedColor, currentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
