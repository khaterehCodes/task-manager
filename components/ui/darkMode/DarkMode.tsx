"use client";
import { useEffect, useState } from "react";
import Button from "../customButton/Button";
import Icon from "../icons/Icon";

function DarkMode() {
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
    <div className="relative">
      <Button
        onClick={() => setDarkMode(!darkMode)}
        className={`w-18 h-10 rounded-lg relative ${darkMode ? "bg-[#343A40]" : "bg-[#F1F3F5]"}`}
      >
        {darkMode ? (
          <div className="w-8 h-8 rounded-lg bg-[#868E96] cursor-pointer flex items-center justify-center absolute bottom-1 left-1">
            <Icon name="darkMode" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-lg bg-[#FFFFFF] cursor-pointer flex items-center justify-center absolute bottom-1 right-1">
            <Icon name="lightMode" />
          </div>
        )}
      </Button>
    </div>
  );
}

export default DarkMode;
