import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { useState } from "react";
import SearchAndFilters from "./SearchAndFilters";
import ShareButton from "./ShareButton";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CalendarHeader from "@/app/board/calendar/(components)/CalendarHeader";

function Header() {
  const [openShare, setOpenShare] = useState<boolean>(false);
  const pathName = usePathname();
  const profileHeader = pathName.startsWith("/profile");
  const calendarHeader = pathName.startsWith("/board/calendar");

  return (
    <>
      {profileHeader ? (
        ""
      ) : (
        <>
          {calendarHeader ? (
            <div className="h-34 w-full flex flex-col justify-center gap-2 p-5">
              <div className="w-full h-15 flex items-center justify-between border-b-[0.5px] border-[#AAAAAA]">
                <div className="w-fit h-full flex items-center gap-5">
                  <P className="text-[20px] font-extrabold p-3 border-l w-fit border-[#999999] h-6 flex items-center justify-between">
                    پروژه اول
                  </P>
                  <NavBar />
                </div>
                <div
                  onClick={() => setOpenShare(!openShare)}
                  className="font-medium flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Icon name="share" />
                  اشتراک گذاری
                </div>
              </div>
              <div className="w-full h-7 flex items-center justify-start gap-10">
                <SearchBar />
                <CalendarHeader />
              </div>
            </div>
          ) : (
            <>
              <div className="h-34 w-full flex flex-col justify-center gap-2 p-5">
                <div className="w-full h-15 flex items-center justify-between border-b-[0.5px] border-[#AAAAAA]">
                  <div className="w-fit h-full flex items-center gap-5">
                    <P className="text-[20px] font-extrabold p-3 border-l w-fit border-[#999999] h-6 flex items-center justify-between">
                      پروژه اول
                    </P>
                    <NavBar />
                  </div>
                  <div
                    onClick={() => setOpenShare(!openShare)}
                    className="font-medium flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Icon name="share" />
                    اشتراک گذاری
                  </div>
                </div>
                <div className="w-full h-7">
                  <SearchAndFilters />
                </div>
              </div>
              <ShareButton openShare={openShare} setOpenShare={setOpenShare} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Header;
