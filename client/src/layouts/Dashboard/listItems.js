import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../../Services/redux/reducers/Admin/adminSlice";
export default function ListItems() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  }
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <NavLink className={"mobile-links"} to={"/dashboard"}>
          <ListItemText primary="Dashbossard" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <NavLink className={"mobile-links"} to={"/dashboard/editHome"}>
          <ListItemText primary="Home Page" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <NavLink className={"mobile-links"} to={"/dashboard/editAbout"}>
          <ListItemText primary="About Page" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <NavLink className={"mobile-links"} to={"/dashboard/editContact"}>
          <ListItemText primary="Contact Page" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <NavLink className={"mobile-links"} to={"/dashboard/CreateProjects"}>
          <ListItemText primary="Create Projects" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <NavLink className={"mobile-links"} to={"/dashboard/DeleteProjects"}>
          <ListItemText primary="Delete Projects" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <NavLink className={"mobile-links"} to={"/dashboard/UpdateProjects"}>
          <ListItemText primary="Update Projects" />
        </NavLink>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText onClick={handleLogout} primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
}

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Account
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <SettingsIcon />
//       </ListItemIcon>
//       <ListItemText primary="Logout" />
//     </ListItemButton>
//   </React.Fragment>
// );
