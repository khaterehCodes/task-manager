import { configureStore } from "@reduxjs/toolkit";
import workSpaceSlice from "../features/WorkSpaceSlice";
import projectSlice from "../features/ProjectSlice";
import taskSlice from "../features/TaskSlice";

const Store = configureStore({
  reducer: {
    workSpace: workSpaceSlice,
    projectSlice: projectSlice,
    taskSlice: taskSlice,
  },
});

Store.subscribe(() => {
  if (typeof window === "undefined") return;
  localStorage.setItem("storeRedux", JSON.stringify(Store.getState()));
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
