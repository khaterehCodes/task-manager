import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import DropDown from "@/components/ui/sideBar/DropDown";
import Icon from "@/components/ui/icons/Icon";
import { useState } from "react";
import Profile from "./Profile";
import { usePathname } from "next/navigation";
import SideBarProfile from "@/app/profile/(components)/sidebarProfile/SideBarProfile";

function SideBar() {
  const pathName = usePathname();
  const profileSidebar = pathName.startsWith("/profile");
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  return (
    <>
      {profileSidebar ? (
        <div className="w-full h-full flex flex-col items-center border-l-[0.5px] border-[#AAAAAA] relative">
          <P className="text-[38px] font-medium p-5">تسک منیجر</P>
          <div className="w-48 h-100 flex items-center justify-between">
            <SideBarProfile />
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center border-l-[0.5px] border-[#AAAAAA] relative">
          <P className="text-[38px] font-medium p-5">تسک منیجر</P>
          <div className="w-69 h-6 flex items-center justify-between">
            <P className="font-extrabold">ورک‌اسپیس‌ها</P>
            <Button
              onClick={() => setOpenDropDown(!openDropDown)}
              className="cursor-pointer"
            >
              {openDropDown ? (
                <Icon name="upArrow" />
              ) : (
                <Icon name="downArrow" />
              )}
            </Button>
          </div>
          {openDropDown && <DropDown />}
          <Profile />
        </div>
      )}
    </>
  );
}

export default SideBar;
