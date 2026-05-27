import { navItems } from "@/core/constants/global";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "../icons/Icon";
import P from "../customP/P";
import { useTheme } from "@/core/provider/ThemeContext";

function NavBar() {
  const pathName = usePathname();
  const { currentTheme } = useTheme();
  return (
    <>
      {navItems.map((item) => {
        const isNav = pathName === item.path;
        return (
          <React.Fragment key={item.id}>
            <Link href={item.path}>
              <div className="w-fit h-6 border-l border-[#999999] p-3 flex items-center justify-center cursor-pointer gap-2">
                {isNav ? (
                  <>
                    <Icon name={item.icon} style={{ color: currentTheme }} />
                    <P
                      className="font-extrabold"
                      style={{ color: currentTheme }}
                    >
                      {item.title}
                    </P>
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
    </>
  );
}

export default NavBar;
