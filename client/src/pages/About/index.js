import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbout } from "../../Services/redux/reducers/About/aboutSlice";
import { setAboutMe } from "../../Services/redux/reducers/AboutMe/aboutMeSlice";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      about: state.about.about,
      aboutMe: state.aboutMe.aboutMe,
    };
  });
  const aboutInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/about");
      dispatch(setAbout(result.data.result));
    } catch (error) {}
  };
  const aboutMeInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/aboutme");
      dispatch(setAboutMe(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    aboutMeInformation();
    aboutInformation();
  }, []);
  return (
    <>
      <div className="about_section">
        <Container>
          {state.aboutMe.map((res) => {
            return (
              <>
                <Box
                  sx={{
                    pt: 5,
                  }}
                >
                  <Typography variant="h4" component="h1">
                    {res.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pt: 2,
                    pb: 5,
                  }}
                >
                  <Typography variant="subtitle1" component="h1">
                    {res.aboutme}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Container>
      </div>
      {/* {state.about.map((res) => {
        return (
          <div key={res.id}>
            <h1>{res.title}</h1>
            <h4>{res.aboutme}</h4>
            <h4>{res.image}</h4>
          </div>
        );
      })} */}
    </>
  );
}
