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
    setProjects: (_state, action: PayloadAction<ProjectStateType>) => {
      return action.payload;
    },
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
    selectProject: (state, action: PayloadAction<string>) => {
      state.selectProjectId = action.payload;
    },
  },
});

export const {
  addProject,
  deleteProject,
  editProject,
  selectProject,
  setProjects,
} = projectSlice.actions;
export default projectSlice.reducer;
