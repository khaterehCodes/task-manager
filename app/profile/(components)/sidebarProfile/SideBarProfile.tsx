import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { profileNav } from "@/core/constants/global";
import { useRouter } from "next/navigation";
import React from "react";
import { useProfileNav } from "../../context/ProfileContext";

function SideBarProfile() {
  const { setSelectedNav } = useProfileNav();
  const router = useRouter();
  const navHandler = (id: number) => {
    setSelectedNav(id);
  };
  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-evenly">
        <Button
          onClick={() => router.push("/")}
          className="w-29 h-9 bg-[#208D8E] rounded-lg text-white cursor-pointer text-[20px] font-medium flex items-center justify-center gap-1"
        >
          <Icon name="return" />
          بازگشت
        </Button>
        <div className="w-full h-44 flex flex-col justify-between">
          {profileNav.map((nav) => (
            <React.Fragment key={nav.id}>
              <div
                onClick={() => navHandler(nav.id)}
                className={`w-full h-10 flex items-center gap-2 cursor-pointer`}
              >
                <Icon name={nav.icon} />
                <P className={`text-[20px] font-medium`}>{nav.title}</P>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBarProfile;
