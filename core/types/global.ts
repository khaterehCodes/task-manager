import { ReactNode } from "react";

export type ModalType = {
  children: ReactNode;
  openModal: boolean;
};

export type ShareButtonType = {
  openShare: boolean;
  setOpenShare: (value: boolean) => void;
};

export type PermissionsHeader = {
  openPermission: boolean;
  setOpenPermissions: (value: boolean) => void;
  setShowPermission: (value: string) => void;
};

export type NewProjectType = {
  newProject: boolean;
  setNewProject: (value: boolean) => void;
};

export type NavLinkType = {
  children: ReactNode;
  className: string;
  href: string;
};

export type OpenInformationType = {
  openInfo: boolean;
  setOpenInfo: (value: boolean) => void;
};
