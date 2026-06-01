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
    editWorkSpaceName: (
      state,
      action: PayloadAction<{ id: string; name: string }>,
    ) => {
      const findWS = state.items.find((w) => w.id === action.payload.id);
      if (findWS) {
        findWS.name = action.payload.name;
      }
    },
    changeWorkSpaceColor: (
      state,
      action: PayloadAction<{ id: string; color: string }>,
    ) => {
      const findWS = state.items.find((w) => w.id === action.payload.id);
      if (findWS) {
        findWS.color = action.payload.color;
      }
    },
  },
});

export const {
  addWorkSpace,
  deleteWorkSpace,
  selectWorkSpace,
  changeWorkSpaceColor,
  editWorkSpaceName,
} = workSpaceSlice.actions;
export default workSpaceSlice.reducer;
