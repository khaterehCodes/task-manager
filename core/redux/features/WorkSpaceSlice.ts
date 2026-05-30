import { WorkSpaceStateType, WorkSpaceType } from "@/core/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WorkSpaceStateType = {
  items: [],
  selectedWorkSpaceId: null,
};

const workSpaceSlice = createSlice({
  name: "workSpace",
  initialState,
  reducers: {
    addWorkSpace: (state, action: PayloadAction<WorkSpaceType>) => {
      state.items.push(action.payload);
    },
    deleteWorkSpace: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((w) => w.id !== action.payload);
      if (state.selectedWorkSpaceId === action.payload) {
        state.selectedWorkSpaceId = null;
      }
    },
    selectWorkSpace: (state, action: PayloadAction<string>) => {
      state.selectedWorkSpaceId = action.payload;
    },
  },
});

export const { addWorkSpace, deleteWorkSpace, selectWorkSpace } =
  workSpaceSlice.actions;
export default workSpaceSlice.reducer;
