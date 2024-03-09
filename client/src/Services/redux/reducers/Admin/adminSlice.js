import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
    isLoggedIn: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    setLogin: (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("token", state.token);
      },
      setUserId: (state, action) => {
        state.userId = action.payload;
        localStorage.setItem("userId", state.userId);
      },
      setLogout: (state, action) => {
        state.token = null;
        state.userId = null;
        state.isLoggedIn = false;
        localStorage.clear();
      },
  },
});

export const {
    setLogin,
    setUserId,
    setLogout
} = adminSlice.actions
export default adminSlice.reducer