import { TaskStateType } from "@/core/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskStateType = {
  filter: {},
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    filterTask: (
      state,
      action: PayloadAction<Partial<TaskStateType["filter"]>>,
    ) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { filterTask } = taskSlice.actions;
export default taskSlice.reducer;
