import { ProjectStateType, ProjectType } from "@/core/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProjectStateType = {
  selectedProject: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<ProjectType>) => {
      return state;
    },
    selectProject: (state, action: PayloadAction<number>) => {
      state.selectedProject = action.payload;
    },
  },
});

export const { addProject, selectProject } = projectSlice.actions;
export default projectSlice.reducer;