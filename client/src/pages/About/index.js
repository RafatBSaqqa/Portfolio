import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAboutMe } from "../../Services/redux/reducers/AboutMe/aboutMeSlice";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Blog from "../../components/Blog";

export default function About() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      aboutMe: state.aboutMe.aboutMe,
    };
  });

  const aboutMeInformation = async () => {
    try {
      const result = await axios.get("https://rafat-saqqa.onrender.com/aboutme");
      dispatch(setAboutMe(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    aboutMeInformation();
  }, []);
  return (
    <>
      <Box className="about_section">
        <Container>
          <Box>
            {state.aboutMe.map((res) => {
              return (
                <>
                  <Box
                    sx={{
                      pt: 5,
                    }}
                  >
                    <Typography className="anim" variant="h4" component="h1">
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
          </Box>
        </Container>
      </Box>
      <Blog />
    </>
  );
}
