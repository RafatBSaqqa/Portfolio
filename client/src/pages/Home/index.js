import React, { useEffect } from "react";
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
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flexWrap: "wrap",
}));

export default function Home() {
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
    } catch (error) {}
  };
  useEffect(() => {
    homeInformation();
  }, []);
  <script
    src="https://kit.fontawesome.com/83518c9c44.js"
    crossorigin="anonymous"
  ></script>;
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          // borderRadius: 1,
          flexWrap: "wrap",
        }}
      >
        {state.home.map((res) => {
          return (
            <>
              <Box width={400}>
                <Item>
                  <Typography
                    paddingTop={2}
                    paddingLeft={2}
                    lineHeight={1.3}
                    variant="h4"
                    component="h4"
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
                    <GitHubIcon />
                    <LinkedInIcon />
                  </Typography>
                </Item>
              </Box>
              {/* <Item> */}
              <Typography paddingLeft={2}>
                <img className={"img_home"} width={150} src={`${res.image}`} />
              </Typography>

              {/* </Item> */}
            </>
          );
        })}
      </Box>
      <Box

      >
        <Typography padding={1}>Tech Stack:</Typography>
        <Item>
          <HtmlIcon fontSize="large" />
          <CssIcon fontSize="large"/>
          <JavascriptIcon fontSize="large"/>
        </Item>
      </Box>
    </Container>
  );
}
