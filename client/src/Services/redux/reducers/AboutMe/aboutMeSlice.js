import { createSlice } from "@reduxjs/toolkit";

export const aboutMeSlice = createSlice({
  name: "aboutMe",
  initialState: {
    aboutMe: [],
  },
  reducers: {
    setAboutMe: (state, action) => {
      // payload is an array
      state.aboutMe = action.payload;
    },
    updateAboutMe: (state, action) => {
      state.aboutMe = action.payload;
    },
  },
});

export const { setAboutMe, updateAboutMe } = aboutMeSlice.actions;
export default aboutMeSlice.reducer;
