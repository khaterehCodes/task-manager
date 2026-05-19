import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { useEffect, useState } from "react";

function Profile() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="w-full h-22 flex items-center justify-center absolute bottom-5">
      <div className="w-69 h-full flex flex-col justify-between">
        <div className="w-full h-9 flex items-center justify-start gap-2">
          <div className="w-9 h-9 rounded-full bg-pink-200 flex items-center justify-center">
            <P className="text-pink-500 text-[12px]">KN</P>
          </div>
          <P className="font-medium">خاطره ناصری</P>
        </div>
        <div className="w-full h-9 flex items-center justify-between">
          <Button className="w-16 flex items-center justify-center gap-2 cursor-pointer text-[#818181] font-medium">
            <Icon name="logout" />
            خروج
          </Button>
          <Button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-16 h-full rounded-lg relative ${darkMode ? "bg-[#343A40]" : "bg-[#F1F3F5]"}`}
          >
            {darkMode ? (
              <div className="w-8 h-8 bg-[#868E96] rounded-lg flex items-center justify-center cursor-pointer absolute left-0.5 top-0.5">
                <Icon name="darkMode" />
              </div>
            ) : (
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center cursor-pointer">
                <Icon name="lightMode" />
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
