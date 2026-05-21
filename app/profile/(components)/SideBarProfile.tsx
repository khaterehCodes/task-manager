import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { profileNav } from "@/core/constants/global";
import { useRouter } from "next/navigation";
import React from "react";
import NavLink from "@/components/ui/navLink/NavLink";

function SideBarProfile() {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-evenly">
        <Button
          onClick={() => router.push("/board/boardView")}
          className="w-29 h-9 bg-[#208D8E] rounded-lg text-white cursor-pointer text-[20px] font-medium flex items-center justify-center gap-1"
        >
          <Icon name="return" />
          بازگشت
        </Button>
        <div className="w-full h-44 flex flex-col justify-between">
          {profileNav.map((nav) => (
            <React.Fragment key={nav.id}>
              <NavLink href={nav.path} className="rounded-md w-60">
                <div
                  className={`w-full h-10 flex items-center gap-2 cursor-pointer`}
                >
                  <Icon name={nav.icon} />
                  <P className={`text-[20px]`}>{nav.title}</P>
                </div>
              </NavLink>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBarProfile;
