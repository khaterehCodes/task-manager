import { TaskStateType, TaskStatusType, TaskType } from "@/core/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskStateType = {
  items: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setTasks: (_state, action: PayloadAction<TaskStateType>) => {
      return action.payload;
    },
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: string; status: TaskStatusType }>,
    ) => {
      const findTask = state.items.find((t) => t.id === action.payload.id);
      if (findTask) {
        findTask.status = action.payload.status;
      }
    },
    archiveTask: (state, action: PayloadAction<string>) => {
      state.items.forEach((t) => {
        if (t.status === action.payload) {
          t.archive = true;
        }
      });
    },
    restoreArchiveTasks: (state) => {
      state.items.forEach((t) => {
        t.archive = false;
      });
    },
  },
});

export const {
  addTask,
  removeTask,
  changeStatus,
  setTasks,
  archiveTask,
  restoreArchiveTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
