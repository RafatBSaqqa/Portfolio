import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setHome } from "../../Services/redux/reducers/Home/homeSlice";

// STYLE Material-UI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import About from "../About/index";
import Projects from "../../components/Project";
import Contact from "../Contact/index";
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
  faEnvira,
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
  faLinkedin,
  faEnvira
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flexWrap: "wrap",
}));
const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Jquery",
  "Bootstrap",
  "React.js",
  "Next.js",
  "Node.js",
  "UI/UX",
  "Redux",
  "Animation",
  "Webdev",
  "OOP"
];
const DURATION = 25000;
const ROWS = 1;
const TAGS_PER_ROW = 14;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
    <FontAwesomeIcon  paddingLeft={2}  className="iconSize iconStyle" icon="fa-solid fa-code" />
  </div>
);

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
      const result = await axios.get("https://rafat-saqqa.onrender.com/home");
      dispatch(setHome(result.data.result));
      setLoader(true);
    } catch (error) {}
  };
  useEffect(() => {
    homeInformation();
  }, []);

  return (
    <>
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
                      ></Typography>
                      <Typography
                        paddingTop={2}
                        paddingLeft={2}
                        lineHeight={1.3}
                        variant="h4"
                        component="h1"
                        style={{ color: "#1bc78a" }}
                      >
                        <div class="main">
                          <h3>
                            Hello. I'm Rafat:
                            <div class="roller">
                              <span id="rolltext">
                                Back-end
                                <br />
                                Front-end
                                <br />
                                Developer
                                <br />
                                <span id="spare-time">{res.position}</span>
                                <br />
                              </span>
                            </div>
                          </h3>
                        </div>
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
                          className=" iconSize "
                          style={{ color: "#000000" }}
                          onClick={() => window.open(`${res.github}`, "_blank")}
                          title="Click"
                        />
                        <FontAwesomeIcon
                          icon="fa-brands fa-linkedin"
                          style={{ color: "#0033ff" }}
                          onClick={() =>
                            window.open(`${res.linkedin}`, "_blank")
                          }
                          className="iconStyle iconSize"
                          title="Click"
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
          <div className="app">
            <div className="tag-list">
              {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider
                  key={i}
                  duration={random(DURATION - 5000, DURATION + 5000)}
                  reverse={i % 2}
                >
                  {shuffle(TAGS)
                    .slice(0, TAGS_PER_ROW)
                    .map((tag) => (
                      <Tag text={tag} key={tag} />
                    ))}
                </InfiniteLoopSlider>
              ))}
              <div className="fade" />
            </div>
          </div>
          {/* <Box sx={{ pt: 2 }}>
            <FontAwesomeIcon
              className="iconSize iconStyle"
              icon="fa-brands fa-html5"
              style={{ color: "#ff3d3d" }}
              paddingLeft={2}
              title="Hyper Text Markup Language"
            />

            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              style={{ color: "#FFD43B" }}
              className="iconStyle iconSize"
              title="Cascade Style Sheet"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-js"
              style={{ color: "#FFD43B" }}
              className="iconStyle iconSize"
              title="JavaScript"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-node"
              style={{ color: "#139028" }}
              className="iconStyle iconSize"
              title="Node JS"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-react"
              style={{ color: "#74C0FC" }}
              className="iconStyle iconSize"
              title="React JS"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-bootstrap"
              style={{ color: "#7244fd" }}
              className="iconStyle iconSize"
              title="Bootstrap"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-php"
              style={{ color: "#B197FC" }}
              className="iconStyle iconSize"
              title="Hypertext Preprocessor"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              style={{ color: "#000000" }}
              className="iconStyle iconSize"
              title="DataBase"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-git"
              style={{ color: "#ff4405" }}
              className="iconStyle iconSize"
              title="version control system"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              style={{ color: "#000000" }}
              className="iconStyle iconSize"
              title="GitHub"
            />
            <FontAwesomeIcon
              icon="fa-brands fa-envira"
              style={{ color: "#4dff00" }}
              className="iconStyle iconSize"
              title="MongoDB"
            />
          </Box> */}
        </Box>
      </Container>
      <Box sx={{ pt: 15, pb: 10 }}>
        <About />
      </Box>
      {/* <Box sx={{ pt: 10, pb: 15 }}> */}
      <Projects />
      {/* </Box> */}
      <Box sx={{ pt: 15, pb: 10 }}>
        <Contact />
      </Box>
    </>
  );
}
