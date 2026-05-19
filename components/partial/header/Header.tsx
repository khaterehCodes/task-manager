import Button from "@/components/ui/customButton/Button";
import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { navItems } from "@/core/constants/global";
import React from "react";
import SearchAndFilters from "./SearchAndFilters";

function Header() {
  return (
    <div className="h-34 w-full flex flex-col justify-center gap-2 p-5">
      <div className="w-full h-15 flex items-center justify-between border-b-[0.5px] border-[#AAAAAA]">
        <div className="w-fit h-full flex items-center gap-5">
          <P className="text-[20px] font-extrabold p-3 border-l w-fit border-[#999999]">
            پروژه اول
          </P>
          {navItems.map((item) => (
            <React.Fragment key={item.id}>
              <div className="w-fit h-fit border-l border-[#999999] p-3 flex items-center justify-center cursor-pointer gap-2">
                <Icon name={item.icon} />
                <P>{item.title}</P>
              </div>
            </React.Fragment>
          ))}
        </div>
        <Button className="font-medium flex items-center justify-center gap-1 cursor-pointer">
          <Icon name="share" />
          اشتراک گذاری
        </Button>
      </div>
      <div className="w-full h-7">
        <SearchAndFilters />
      </div>
    </div>
  );
}

export default Header;
