import { ProjectStateType, ProjectType } from "@/core/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProjectStateType = {
  items: [],
  selectProjectId: null,
};

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<ProjectType>) => {
      state.items.push(action.payload);
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    editProject: (
      state,
      action: PayloadAction<{ id: string; name: string }>,
    ) => {
      const findProject = state.items.find((p) => p.id === action.payload.id);
      if (findProject) {
        findProject.name = action.payload.name;
      }
    },
  },
});

export const { addProject, deleteProject, editProject } = projectSlice.actions;
export default projectSlice.reducer;
