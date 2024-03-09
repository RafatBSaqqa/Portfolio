import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Notfound from "../pages/Notfound";
import AdminLogin from "../pages/Admin";
import Dashboard from "../layouts/Dashboard";
import EditHome from "../pages/EditHome";
import EditAbout from "../pages/EditAbout";
import EditContact from "../pages/EditContact";
import EditProjects from "../pages/EditProjects";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard/editHome", element: <EditHome /> },
      { path: "/dashboard/editAbout", element: <EditAbout /> },
      { path: "/dashboard/editContact", element: <EditContact /> },
      { path: "/dashboard/editProjects", element: <EditProjects /> },
    ], 
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
