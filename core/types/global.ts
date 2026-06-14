import { ReactNode } from "react";

export type ModalType = {
  children: ReactNode;
  openModal: boolean;
  setOpenModal?: (value: boolean) => void;
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
  projectName: string;
  setProjectName: (value: string) => void;
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
export type PriorityType = "فوری" | "بالا" | "متوسط" | "پایین" | "بدون اولویت";

export type TaskType = {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: TaskStatusType;
  priority: PriorityType;
  coverIMG?: string;
  startDate?: string;
  endDate?: string;
  tags?: string;
  archive?: boolean;
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
  setPriority: (value: PriorityType) => void;
};

export interface PriorityFlagTypes {
  id: number;
  title: PriorityType;
  flag: string;
  finalFlag: string;
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

export interface TasksHeadeType {
  id: number;
  title: string;
}

export interface User {
  jwt?: string;
  role?: string;
  firstName?: string;
  lastName?: string;
}

export type DescPropsType = {
  openDesc: boolean;
  setOpenDesc: (value: boolean) => void;
};

export type DatePropsType = {
  openCal: boolean;
  setOpenCal: (value: boolean) => void;
};

export type FilterPropsType = {
  openFilter: boolean;
  setOpenFilter: (value: boolean) => void;
};

export type DetailPropsType = {
  showDetail: boolean;
  setShowDetail: (value: boolean) => void;
  columnStatus: "todo" | "in-progress" | "done";
};

export type ChangeWSNameTypes = {
  openChangeWSName: boolean;
  setOpenChangeWSName: (value: boolean) => void;
  selectWorkSpaceId: string | null;
};
