import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import Link from "next/link";
import DarkMode from "../darkMode/DarkMode";

function Profile() {
  return (
    <div className="w-full h-22 flex items-center justify-center absolute bottom-5">
      <div className="w-69 h-full flex flex-col justify-between">
        <div className="w-full h-9 flex items-center justify-start gap-2">
          <Link href={"/profile/user"}>
            <div className="w-9 h-9 rounded-full bg-pink-200 flex items-center justify-center">
              <P className="text-pink-500 text-[12px]">KN</P>
            </div>
          </Link>
          <P className="font-medium">خاطره ناصری</P>
        </div>
        <div className="w-full h-9 flex items-center justify-between">
          <Button className="w-16 flex items-center justify-center gap-2 cursor-pointer text-[#818181] font-medium">
            <Icon name="logout" />
            خروج
          </Button>
          <DarkMode />
        </div>
      </div>
    </div>
  );
}

export default Profile;
