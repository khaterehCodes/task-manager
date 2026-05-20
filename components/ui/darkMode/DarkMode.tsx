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
        className={`w-16 h-full rounded-lg relative ${darkMode ? "bg-[#F1F3F5]" : "bg-[#343A40]"}`}
      >
        {darkMode ? (
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center cursor-pointer">
            <Icon name="lightMode" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-[#868E96] rounded-lg flex items-center justify-center cursor-pointer absolute left-0 bottom-0">
            <Icon name="darkMode" />
          </div>
        )}
      </Button>
    </div>
  );
}

export default DarkMode;
