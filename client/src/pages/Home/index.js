import React, { useState } from "react";

// STYLE Material-UI
import Logo from "../../img/person.jpeg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import About from "../About/index";
import Projects from "../../components/Project";
import Contact from "../Contact/index";
import Badge from "@mui/material/Badge";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import { SiSocketdotio } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { SiVisualstudiocode } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { SiBabel } from "react-icons/si";
import { MdHttp } from "react-icons/md";
import { SiPostman } from "react-icons/si";


import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
  // border: '1px solid darkblue',
}));

export default function Home() {
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
          <>
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
                        <span id="spare-time">Full-stack web developer</span>
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
                full stack web developer based in jordan.m enthusiastic about
                crafting user-friendly web experiences with a strong foundation.
                I stay updated on the latest trends and am eager to contribute
                to innovative projects.
              </Typography>
              <Typography paddingLeft={2} lineHeight={1.5}>
                <Box sx={{ fontSize: "45px", color: "#000000" }}>
                  <FaGithub
                    title="Click"
                    className="iconSize"
                    onClick={() =>
                      window.open(`https://github.com/RafatBSaqqa`, "_blank")
                    }
                  />
                  <FaLinkedin
                    title="Click"
                    className="iconSize linked"
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/in/rafat-saqqa/`,
                        "_blank"
                      )
                    }
                  />
                  <FaFacebook
                    title="My Page"
                    className="iconSize facebook"
                    onClick={() =>
                      window.open(
                        `https://web.facebook.com/RafatAlsaqqa`,
                        "_blank"
                      )
                    }
                  />
                </Box>
              </Typography>
            </Box>
            <Typography padding={1}>
              <img className={"img_home"} width={150} src={`${Logo}`} />
            </Typography>
          </>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography padding={2}>Software development:</Typography>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "red",width:"50px" }}>
                    <FaHtml5 />
                  </Box>
                  <Typography sx={{width:"100px" }}padding={1}>
                    HTML <br />{" "}
                    <Badge color="success" badgeContent="99%"></Badge>
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "blue",width:"50px" }}>
                    <FaCss3Alt />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    CSS <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#205d96",width:"50px" }}>
                    <BiLogoJquery />
                  </Box>
                  <Typography sx={{width:"100px" }}padding={1}>
                    Jquery <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#e7ed32",width:"50px" }}>
                    <IoLogoJavascript />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    JavaScript <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "green",width:"50px" }}>
                  <DiMongodb />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    MongoDB <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#000000" ,width:"50px"}}>
                     <SiExpress />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                  Express <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#5ed3f3" ,width:"50px"}}>
                    <FaReact />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    React Js <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#31648c",width:"50px" }}>
                    <BiLogoPostgresql />
                  </Box>
                  <Typography sx={{width:"100px" }}  padding={1}>
                    Postgresql <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#e84e31",width:"50px" }}>
                    <FaGitAlt />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    GIT and <br /> Terminal
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#7248b6" ,width:"50px"}}>
                    <TbBrandRedux />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    Redux <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#1b74ba",width:"50px" }}>
                    <SiWebpack />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    WepPack <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#509941",width:"50px" }}>
                    <FaNode />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    Node Js <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
           
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#7811f2",width:"50px" }}>
                    <FaBootstrap />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    Bootstrap <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#000000",width:"50px" }}>
                    <BiSolidFileJson />
                  </Box>
                  <Typography sx={{width:"100px" }}padding={1}>
                    Json <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#000000" ,width:"50px"}}>
                    <SiSocketdotio />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    Socket.io <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#000000" }}>
                    <TbFileTypeSql />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    SQL <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#1e97e8" ,width:"50px" }}>
                    <SiVisualstudiocode />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    VS code <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#848db9" ,width:"50px" }}>
                    <FaPhp />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    PHP <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#f72c1f",width:"50px"  }}>
                    <FaLaravel />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    Laravel <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ fontSize: "60px", color: "#8bc4f0",width:"50px" }}>
                    <FaSearchengin />
                  </Box>
                  <Typography sx={{width:"100px" }} padding={1}>
                    SEO <br />
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ fontSize: "60px", color: "#964d92" ,width:"50px"}}>
                      <TbBrandCSharp />
                    </Box>
                    <Typography sx={{width:"100px" }} padding={1}>
                      C# <br />
                    </Typography>
                  </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ fontSize: "60px", color: "#f1d53c" ,width:"50px"}}>
                    <SiBabel />
                    </Box>
                    <Typography sx={{width:"100px" }} padding={1}>
                      Babel <br />
                    </Typography>
                  </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ fontSize: "60px", color: "#000000" ,width:"50px"}}>
                    <MdHttp />
                    </Box>
                    <Typography sx={{width:"100px" }} padding={1}>
                      HTTP <br />
                    </Typography>
                  </Box>
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ fontSize: "60px", color: "#f76935" ,width:"50px"}}>
                    <SiPostman />
                    </Box>
                    <Typography sx={{width:"100px" }} padding={1}>
                      Postman <br />
                    </Typography>
                  </Box>
              </Item>
            </Grid>
          </Grid>
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
