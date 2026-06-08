import { useAuth } from "@/core/provider/AuthProvider";
import { useTheme } from "@/core/provider/ThemeContext";
import P from "../customP/P";

function ProfileCard() {
  const { user } = useAuth();
  const { currentTheme } = useTheme();
  const profileName =
    user?.firstName && user.lastName
      ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
      : ".";
  return (
    <div
      style={{ backgroundColor: currentTheme }}
      className="w-9 h-9 rounded-full flex items-center justify-center"
    >
      <P className="text-white text-[12px]">{profileName}</P>
    </div>
  );
}

export default ProfileCard;
