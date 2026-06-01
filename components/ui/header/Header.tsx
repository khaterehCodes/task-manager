import P from "@/components/ui/customP/P";
import Icon from "@/components/ui/icons/Icon";
import { useEffect, useState } from "react";
import SearchAndFilters from "./SearchAndFilters";
import ShareButton from "./ShareButton";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CalendarHeader from "@/app/board/calendar/(components)/CalendarHeader";
import { useAppSelector } from "@/core/hooks/ReduxHook";

function Header() {
  const [openShare, setOpenShare] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const pathName = usePathname();
  const nonHeaderPages = [
    "/profile/setting",
    "/profile/account",
    "/profile/user",
    "/",
  ];
  const nonHeader = nonHeaderPages.includes(pathName);
  const calendarHeader = pathName.startsWith("/board/calendar");
  const findProjectName = useAppSelector(
    (state) => state.projectSlice.selectProjectId,
  );
  const projects = useAppSelector((state) => state.projectSlice.items);

  const projectName = projects.find((p) => p.id === findProjectName);
  return (
    <>
      {nonHeader ? (
        ""
      ) : (
        <>
          {calendarHeader ? (
            <div className="h-34 w-full flex flex-col justify-center gap-2 p-5">
              <div className="w-full h-15 flex items-center justify-between border-b-[0.5px] border-[#AAAAAA]">
                <div className="w-fit h-full flex items-center gap-5">
                  <P className="text-[20px] font-extrabold p-3 border-l w-fit border-[#999999] h-6 flex items-center justify-between">
                    {mounted ? (projectName ? projectName.name : ".") : ".."}
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
                      {mounted ? (projectName ? projectName.name : ".") : ".."}
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
