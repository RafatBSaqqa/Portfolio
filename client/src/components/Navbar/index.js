import { NavLink } from "react-router-dom";
import * as React from "react";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const drawerWidth = 240;
export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <NavLink className={"mobile-links"} to={"/"}>
        <Typography variant="h6" sx={{ my: 2, color: "#000000" }}>
          Rafat Saqqa
        </Typography>
      </NavLink>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink className={"mobile-links"} to={"/"}>
              <ListItemText primary={"Home"} />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink className={"mobile-links"} to={"/about"}>
              <ListItemText primary={"About"} />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink className={"mobile-links"} to={"/contact"}>
              <ListItemText primary={"Contact"} />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink className={"mobile-links"} to={"/Projects"}>
              <ListItemText primary={"Projects"} />
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{ background: "#ffffff" }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#1bc78a" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <NavLink className={"mobile_links_home"} to={"/"}>
              Rafat Saqqa
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink to={"/"}>
              <Button sx={{ color: "#1bc78a" }}>{"home"}</Button>
            </NavLink>
            <NavLink to={"/about"}>
              <Button sx={{ color: "#1bc78a" }}>{"About"}</Button>
            </NavLink>
            <NavLink to={"/contact"}>
              <Button sx={{ color: "#1bc78a" }}>{"Contact"}</Button>
            </NavLink>
            <NavLink to={"/projects"}>
              <Button sx={{ color: "#1bc78a" }}>{"Projects"}</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
