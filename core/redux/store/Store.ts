import { configureStore } from "@reduxjs/toolkit";
import workSpaceSlice from "../features/WorkSpaceSlice";
import projectSlice from "../features/ProjectSlice";
import taskSlice from "../features/TaskSlice";
export const Store = configureStore({
  reducer: {
    workSpace: workSpaceSlice,
    project: projectSlice,
    task: taskSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
