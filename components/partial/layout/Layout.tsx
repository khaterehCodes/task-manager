"use client";

import React, { ReactNode } from "react";
import Header from "../../ui/header/Header";
import { usePathname } from "next/navigation";
import RegistrationHeader from "../../ui/registrationHeader/RegistrationHeader";
import SideBar from "../../ui/sideBar/SideBar";
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
    <>
      <div className="w-full h-screen flex overflow-hidden">
        {registerPage ? (
          ""
        ) : (
          <div className="w-85 h-screen">
            <SideBar />
          </div>
        )}
        <div className={`${registerPage ? "w-full" : "w-300 h-screen"}`}>
          <header>{registerPage ? <RegistrationHeader /> : <Header />}</header>
          <main className="h-screen overflow-y-auto">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
