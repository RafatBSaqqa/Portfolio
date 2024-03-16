import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
  },
  reducers: {
    setBlog: (state, action) => {
      // payload is an array
      state.blog = action.payload;
    },
    updateBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export const { setBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;
