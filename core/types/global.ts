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
  workSpaceId?: string;
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

export type WorkSpaceDtailProps = {
  openWorkSpace: boolean;
  setOpenWorkSpace: (value: boolean) => void;
  selectWorkSpaceId: string | null;
};

export type ProjectsDetailProps = {
  moreProjects: boolean;
  setMoreProjects: (value: boolean) => void;
  projectId: string | null;
};

export type TasksModalType = {
  newTaskModal: boolean;
  setNewTaskModal: (value: boolean) => void;
};

export type PrioritiesPropsType = {
  openPriorities: boolean;
  setOpenPriorities: (value: boolean) => void;
};

export interface PriorityFlagTypes {
  id: number;
  title: string;
  flag: string;
}

export type TagspropsType = {
  openTag: boolean;
  setOpenTag: (value: boolean) => void;
};

export interface TagsTyep {
  id: number;
  name: string;
  color: string;
  textColor?: string;
}

export type TagsDetailProps = {
  tagsDetail: boolean;
  setTagsDetail: (value: boolean) => void;
};

export type TagsColorPropsType = {
  tagsColor: boolean;
  setTagsColor: (value: boolean) => void;
};

export interface TagsColorType {
  id: number;
  color?: string;
  textColor: string;
}
