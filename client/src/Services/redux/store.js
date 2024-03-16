import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './reducers/Home/homeSlice'
import contactReducer from "./reducers/Contact/contactSlice";
import projectReducer from "./reducers/Project/projectSlice";
import blogReducer from "./reducers/Blog/blogSlice";
import authReducer from "./reducers/Admin/adminSlice";
import aboutMeReducer from "./reducers/AboutMe/aboutMeSlice";
export default configureStore({
  // the reducer object is empty for now but after creating reducers we add them to this object
  reducer: {
    home:homeReducer,
    contact:contactReducer,
    project:projectReducer,
    blog:blogReducer,
    auth:authReducer,
    aboutMe:aboutMeReducer
  },
});