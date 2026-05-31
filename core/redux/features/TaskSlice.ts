import { TaskStateType, TaskStatusType, TaskType } from "@/core/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskStateType = {
  items: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
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
  },
});

export const { addTask, removeTask, changeStatus } =
  taskSlice.actions;
export default taskSlice.reducer;
