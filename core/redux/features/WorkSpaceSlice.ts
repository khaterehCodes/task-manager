import { WorkSpaceStateType, WorkSpaceType } from "@/core/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WorkSpaceStateType = {
  workSpaces: [],
  selectedWorkSpace: null,
};

const workSpaceSlice = createSlice({
  name: "workSpace",
  initialState,
  reducers: {
    addWorkSpace: (
      state,
      action: PayloadAction<Omit<WorkSpaceType, "projects">>,
    ) => {
      const newWorkSpace: WorkSpaceType = {
        ...action.payload,
        projects: [],
      };
      state.workSpaces.push(newWorkSpace);
    },
    editWorkSpace: (
      state,
      action: PayloadAction<Partial<WorkSpaceType> & { id: number }>,
    ) => {
      const wIndex = state.workSpaces.findIndex(
        (w) => w.id === action.payload.id,
      );
      if (wIndex !== -1) {
        state.workSpaces[wIndex] = {
          ...state.workSpaces[wIndex],
          ...action.payload,
        };
      }
    },
    deleteWorkSpace: (state, action: PayloadAction<number>) => {
      state.workSpaces = state.workSpaces.filter(
        (w) => w.id !== action.payload,
      );
      if (state.selectedWorkSpace === action.payload) {
        state.selectedWorkSpace = null;
      }
    },
    selectWorkSpace: (state, action: PayloadAction<number>) => {
      state.selectedWorkSpace = action.payload;
    },
  },
});

export const { addWorkSpace, editWorkSpace, deleteWorkSpace, selectWorkSpace } =
  workSpaceSlice.actions;
export default workSpaceSlice.reducer;
