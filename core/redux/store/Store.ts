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

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = ReturnType<typeof Store.dispatch>;
