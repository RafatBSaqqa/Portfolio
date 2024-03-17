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
import CreateProjects from "../pages/CreateProjects";
import DeleteProjects from "../pages/DeleteProjects";
import UpdateProjects from "../pages/UpdateProjects";
import EditBlog from "../pages/EditBlog";

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
      { path: "/dashboard/CreateProjects", element: <CreateProjects /> },
      ,
      { path: "/dashboard/DeleteProjects", element: <DeleteProjects /> },
      ,
      { path: "/dashboard/UpdateProjects", element: <UpdateProjects /> },
      ,
      { path: "/dashboard/UpdateBlog", element: <EditBlog /> },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
