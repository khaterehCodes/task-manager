import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { navItems } from "@/core/constants/global";
import React, { useState } from "react";
import SearchAndFilters from "./SearchAndFilters";
import ShareButton from "./ShareButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [openShare, setOpenShare] = useState<boolean>(false);
  const pathName = usePathname();
  const profileHeader = pathName.startsWith("/profile");

  return (
    <>
      {profileHeader ? (
        ""
      ) : (
        <>
          <div className="h-34 w-full flex flex-col justify-center gap-2 p-5">
            <div className="w-full h-15 flex items-center justify-between border-b-[0.5px] border-[#AAAAAA]">
              <div className="w-fit h-full flex items-center gap-5">
                <P className="text-[20px] font-extrabold p-3 border-l w-fit border-[#999999] h-6 flex items-center justify-between">
                  پروژه اول
                </P>
                {navItems.map((item) => {
                  const isNav = pathName === item.path;
                  return (
                    <React.Fragment key={item.id}>
                      <Link href={item.path}>
                        <div className="w-fit h-6 border-l border-[#999999] p-3 flex items-center justify-center cursor-pointer gap-2">
                          {isNav ? (
                            <>
                              <Icon name={item.icon} className="text-[#208D8E]"/>
                              <P className="font-extrabold text-[#208D8E]">{item.title}</P>
                            </>
                          ) : (
                            <>
                              <Icon name={item.icon} />
                              <P>{item.title}</P>
                            </>
                          )}
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>
              <Button
                onClick={() => setOpenShare(!openShare)}
                className="font-medium flex items-center justify-center gap-1 cursor-pointer"
              >
                <Icon name="share" />
                اشتراک گذاری
              </Button>
            </div>
            <div className="w-full h-7">
              <SearchAndFilters />
            </div>
          </div>
          <ShareButton openShare={openShare} setOpenShare={setOpenShare} />
        </>
      )}
    </>
  );
}

export default Header;
