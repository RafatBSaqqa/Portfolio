import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './reducers/Home/homeSlice'
import contactReducer from "./reducers/Contact/contactSlice";
import projectReducer from "./reducers/Project/projectSlice";
import aboutReducer from "./reducers/About/aboutSlice";
import authReducer from "./reducers/Admin/adminSlice";
export default configureStore({
  // the reducer object is empty for now but after creating reducers we add them to this object
  reducer: {
    home:homeReducer,
    contact:contactReducer,
    project:projectReducer,
    about:aboutReducer,
    auth:authReducer
  },
});