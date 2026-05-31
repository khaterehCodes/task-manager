import { configureStore } from "@reduxjs/toolkit";
import workSpaceSlice from "../features/WorkSpaceSlice";
import projectSlice from "../features/ProjectSlice";
import taskSlice from "../features/TaskSlice";
import {
  ProjectStateType,
  TaskStateType,
  WorkSpaceStateType,
} from "@/core/types/global";

interface SlicesType {
  workSpace: WorkSpaceStateType;
  projectSlice: ProjectStateType;
  taskSlice: TaskStateType;
}

const loadState = (): SlicesType | undefined => {
  if (typeof window === "undefined") return undefined;
  try {
    const getLocal = localStorage.getItem("storeRedux");
    return getLocal ? JSON.parse(getLocal) : undefined;
  } catch {
    return undefined;
  }
};

const Store = configureStore({
  reducer: {
    workSpace: workSpaceSlice,
    projectSlice: projectSlice,
    taskSlice: taskSlice,
  },
  preloadedState: loadState(),
});

Store.subscribe(() => {
  localStorage.setItem("storeRedux", JSON.stringify(Store.getState()));
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
