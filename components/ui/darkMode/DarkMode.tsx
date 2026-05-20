import { useDarkMode } from "@/core/provider/DarkModeContext";
import Button from "../customButton/Button";
import Icon from "../icons/Icon";

function DarkMode() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className="">
      <Button
        onClick={() => setDarkMode(!darkMode)}
        className={`w-16 h-full rounded-lg relative ${darkMode ? "bg-[#F1F3F5]" : "bg-[#343A40]"}`}
      >
        {darkMode ? (
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center cursor-pointer">
            <Icon name="lightMode" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-[#868E96] rounded-lg flex items-center justify-center cursor-pointer absolute bottom-0">
            <Icon name="darkMode" />
          </div>
        )}
      </Button>
    </div>
  );
}

export default DarkMode;
