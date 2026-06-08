import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import Link from "next/link";
import { useDark } from "@/core/provider/DarkModeProvider";
import { useAuth } from "@/core/provider/AuthProvider";
import ProfileCard from "../profileCard/ProfileCard";

function Profile() {
  const { darkMode, buttonDarkMode } = useDark();
  const { user, logout } = useAuth();
  if (!user) {
    window.location.href = "/signup";
  }
  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;

  console.log(fullName, "name");
  return (
    <div className="w-full h-22 flex items-center justify-center absolute bottom-5">
      <div className="w-69 h-full flex flex-col justify-between">
        <div className="w-full h-9 flex items-center justify-start gap-2">
          <Link href={"/profile/user"}>
            <ProfileCard />
          </Link>
          <P className="font-medium">{fullName}</P>
        </div>
        <div className="w-full h-9 flex items-center justify-between">
          <div
            onClick={logout}
            className="w-16 flex items-center justify-center gap-2 cursor-pointer text-[#818181] font-medium"
          >
            <Icon name="logout" />
            خروج
          </div>
          <div className="relative">
            <div
              onClick={buttonDarkMode}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
