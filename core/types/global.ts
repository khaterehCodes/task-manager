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

export type CalendarNavType = {
  modalCalandar: boolean;
  setModalCalendar: (value: boolean) => void;
};

export interface WorkSpaceType {
  id: string;
  name?: string;
  color?: string;
  projects?: { name: string; id: number }[];
}

export type WorkSpaceStateType = {
  items: WorkSpaceType[];
  selectedWorkSpaceId: string | null;
};

export interface ProjectType {
  id: string;
  workSpaceId: string;
  name: string;
}

export type ProjectStateType = {
  items: ProjectType[];
  selectProjectId: string | null;
};

export type TaskStatusType = "todo" | "done" | "in-progress";
export type PriorityType = "l" | "m" | "s";

export type TaskType = {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: TaskStatusType;
  priority: PriorityType;
};

export type TaskStateType = {
  items: TaskType[];
};
