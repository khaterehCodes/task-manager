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

export interface TaskType {
  id: number;
  title: string;
  description: string;
  status: "done" | "todo" | "in-progress";
  priority: "h" | "m" | "l";
  createdAt: string;
  dueDate: string;
  projectId: number;
}

export interface ProjectType {
  id: number;
  name: string;
  workSpaceId: number;
  tasks: TaskType[];
}

export interface WorkSpaceType {
  id: number;
  name: string;
  workSpaceId: number;
  projects: ProjectType[];
}

export interface TaskStateType {
  filter: {
    status?: TaskType["status"];
    priority?: TaskType["priority"];
    search?: string;
  };
}

export interface ProjectStateType {
  selectedProject: number | null;
}

export interface WorkSpaceStateType {
  workSpaces: WorkSpaceType[];
  selectedWorkSpace: number | null;
}
