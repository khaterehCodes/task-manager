"use client";

import React, { ReactNode } from "react";
import Header from "../header/Header";
import { usePathname } from "next/navigation";
import RegistrationHeader from "../registrationHeader/RegistrationHeader";
type LayoutPropsType = {
  children: ReactNode;
};

function Layout({ children }: LayoutPropsType) {
  const pathName = usePathname();
  const registerPage = pathName.startsWith("/login");
  return (
    <>
      <header>{registerPage ? <RegistrationHeader /> : <Header />}</header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
