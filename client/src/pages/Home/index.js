import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setHome } from "../../Services/redux/reducers/Home/homeSlice";

// STYLE Material-UI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import About from "../About/index";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faFontAwesome,
  faHtml5,
  faCss3Alt,
  faNode,
  faReact,
  faBootstrap,
  faPhp,
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faFontAwesome,
  faHtml5,
  faCss3Alt,
  faNode,
  faJs,
  faReact,
  faBootstrap,
  faPhp,
  faGit,
  faGithub,
  faLinkedin
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flexWrap: "wrap",
}));

export default function Home() {
 

  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      home: state.home.home,
    };
  });
  const homeInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/home");
      dispatch(setHome(result.data.result));
      setLoader(true);
    } catch (error) {}
  };
  useEffect(() => {
    homeInformation();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 4,
          m: 1,
          bgcolor: "background.paper",
          // borderRadius: 1,
          flexWrap: "wrap",
        }}
      >
        {state.home.map((res) => {
          return (
            <>
              {loader ? (
                <>
                  {" "}
                  <Box width={450}>
                    <Typography
                      paddingTop={2}
                      paddingLeft={2}
                      lineHeight={1.3}
                      variant="h5"
                      component="h4"
                      style={{ color: "#000000" }}
                    >
                      Hello. I'm Rafat
                    </Typography>
                    <Typography
                      paddingTop={2}
                      paddingLeft={2}
                      lineHeight={1.3}
                      variant="h4"
                      component="h1"
                      style={{ color: "#1bc78a" }}
                    >
                      {res.position}
                    </Typography>
                    <Typography
                      padding={2}
                      lineHeight={1.5}
                      variant="subtitle2"
                      component="h6"
                    >
                      {res.bio}
                    </Typography>
                    <Typography paddingLeft={2} lineHeight={1.5}>
                      <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        className=" iconSize"
                      />
                      <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        className="iconStyle iconSize"
                      />
                    </Typography>
                  </Box>
                  <Typography padding={1}>
                    <img
                      className={"img_home"}
                      width={150}
                      src={`${res.image}`}
                    />
                  </Typography>
                </>
              ) : (
                <div class="loader"></div>
              )}
            </>
          );
        })}
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography padding={1}>Tech Stack:</Typography>
        <Item sx={{ textAlign: "center" }}>
          <FontAwesomeIcon
            className="iconSize iconStyle"
            icon="fa-brands fa-html5"
            style={{ color: "#ff3d3d" }}
            paddingLeft={2}
          />
          <FontAwesomeIcon
            icon="fa-brands fa-css3-alt"
            style={{ color: "#FFD43B" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-js"
            style={{ color: "#FFD43B" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-node"
            style={{ color: "#139028" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-react"
            style={{ color: "#74C0FC" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-bootstrap"
            style={{ color: "#7244fd" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-php"
            style={{ color: "#B197FC" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-database"
            style={{ color: "#000000" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-git"
            style={{ color: "#ff4405" }}
            className="iconStyle iconSize"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            style={{ color: "#000000" }}
            className="iconStyle iconSize"
          />
        </Item>
      </Box>
      {/* <About/> */}
    </Container>
  );
}
