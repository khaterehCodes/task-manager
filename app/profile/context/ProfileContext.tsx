"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type ProfilePropsType = {
  children: ReactNode;
};

interface ContextType {
  selectedNav: number;
  setSelectedNav: (value: number) => void;
}

const ProfileContext = createContext<ContextType>({
  selectedNav: 1,
  setSelectedNav: () => {},
});

export const ProfileProvider = ({ children }: ProfilePropsType) => {
  const [selectedNav, setSelectedNav] = useState<number>(1);
  return (
    <ProfileContext.Provider value={{ selectedNav, setSelectedNav }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileNav = () => useContext(ProfileContext);
