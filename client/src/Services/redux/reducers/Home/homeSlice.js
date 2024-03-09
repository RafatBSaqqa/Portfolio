import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    home: [],
  },
  reducers: {
    setHome: (state, action) => {
      // payload is an array
      state.home = action.payload;
    },
    updateHome: (state, action) => {
        state.home = action.payload;
      },
  },
});


export const {
    setHome,
    updateHome
} = homeSlice.actions;
export default homeSlice.reducer