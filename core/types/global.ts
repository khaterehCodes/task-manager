import { ReactNode } from "react";

export type ModalType = {
  children: ReactNode;
  openModal: boolean;
};

export type ShareButtonType = {
  openShare: boolean;
  setOpenShare: (value: boolean) => void;
};
