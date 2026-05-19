"use client";

import React, { ReactNode } from "react";
import Header from "../header/Header";
import { usePathname } from "next/navigation";
import RegistrationHeader from "../registrationHeader/RegistrationHeader";
import SideBar from "../sideBar/SideBar";
type LayoutPropsType = {
  children: ReactNode;
};

function Layout({ children }: LayoutPropsType) {
  const pathName = usePathname();
  const includesPages: Array<string> = [
    "/login",
    "/signup",
    "/forgot",
    "/confirmPassword",
  ];
  const registerPage = includesPages.includes(pathName);
  return (
    <div className="w-full h-auto flex">
      {registerPage ? "" : <div className="w-85 h-screen">
        <SideBar/>
        </div>}
      <div
        className={`${registerPage ? "w-full" : "w-300 h-auto"}`}
      >
        <header>{registerPage ? <RegistrationHeader /> : <Header />}</header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
