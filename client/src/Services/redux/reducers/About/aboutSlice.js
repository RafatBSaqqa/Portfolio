import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    about: [],
  },
  reducers: {
    setAbout: (state, action) => {
      // payload is an array
      state.about = action.payload;
    },
    updateAbout: (state, action) => {
        state.about = action.payload;
      },
  },
});


export const {
    setAbout,
    updateAbout
} = aboutSlice.actions;
export default aboutSlice.reducer