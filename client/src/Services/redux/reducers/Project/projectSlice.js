import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: [],
  },
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
    updateProject: (state, action) => {
      state.project = action.payload;
    },
    newProject: (state, action) => {
      state.project = action.payload;
    },
  },
});

export const { setProject, updateProject, newProject } = projectSlice.actions;
export default projectSlice.reducer;
