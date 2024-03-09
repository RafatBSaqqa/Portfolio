import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contact: [],
  },
  reducers: {
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    updateContact: (state, action) => {
      state.contact = action.payload;
    },
  },
});

export const {
    setContact,
    updateContact
} = contactSlice.actions
export default contactSlice.reducer