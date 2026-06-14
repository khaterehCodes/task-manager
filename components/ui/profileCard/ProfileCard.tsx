import { useAuth } from "@/core/provider/AuthProvider";
import { useTheme } from "@/core/provider/ThemeContext";
import P from "../customP/P";
import IMG from "../customIMG/IMG";

function ProfileCard() {
  const { user, profileIMG } = useAuth();
  const { currentTheme } = useTheme();
  const profileName =
    user?.firstName && user.lastName
      ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
      : ".";
  return (
    <>
      {profileIMG ? (
        <IMG src={profileIMG} className="w-9 h-9 rounded-full" />
      ) : (
        <div
          style={{ backgroundColor: currentTheme }}
          className="w-9 h-9 text-white rounded-full flex items-center justify-center text-[35px] font-medium"
        >
          {profileName}
        </div>
      )}
    </>
  );
}

export default ProfileCard;
