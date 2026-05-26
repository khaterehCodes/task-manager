"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type WorkSpaceProps = {
  children: ReactNode;
};

interface WorkSpaceContextType {
  workSpaceName: string;
  setWorkSpaceName: (value: string) => void;
  openWorkSpace: boolean;
  setOpenWorkSpace: (value: boolean) => void;
  workspaceColor: boolean;
  setWorkspaceColor: (value: boolean) => void;
  openInfo: boolean;
  setOpenInfo: (value: boolean) => void;
  selectWorkSpaceColor: number;
  setSelectWorkSpaceColor: (value: number) => void;
}

const WorkSpaceContext = createContext<WorkSpaceContextType>({
  workSpaceName: "",
  setWorkSpaceName: () => {},
  openWorkSpace: false,
  setOpenWorkSpace: () => {},
  workspaceColor: false,
  setWorkspaceColor: () => {},
  openInfo: false,
  setOpenInfo: () => {},
  selectWorkSpaceColor: 0,
  setSelectWorkSpaceColor: () => {},
});

export const WorkSpaceProvider = ({ children }: WorkSpaceProps) => {
  const [workSpaceName, setWorkSpaceName] = useState<string>("");
  const [workspaceColor, setWorkspaceColor] = useState<boolean>(false);
  const [openWorkSpace, setOpenWorkSpace] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [selectWorkSpaceColor, setSelectWorkSpaceColor] = useState<number>(1);
  return (
    <WorkSpaceContext.Provider
      value={{
        workSpaceName,
        setWorkSpaceName,
        openWorkSpace,
        setOpenWorkSpace,
        workspaceColor,
        setWorkspaceColor,
        openInfo,
        setOpenInfo,
        selectWorkSpaceColor,
        setSelectWorkSpaceColor,
      }}
    >
      {children}
    </WorkSpaceContext.Provider>
  );
};

export const useWorkSpace = () => useContext(WorkSpaceContext);
