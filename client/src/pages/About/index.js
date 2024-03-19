import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Box
      sx={{
        pb: 10,
        pt: 10,
      }}
    >
      <Box
        className="about_section"
        sx={{
          pb: 5,
        }}
      >
        <Container>
          <Box>
            <>
              <Box
                sx={{
                  pt: 5,
                }}
              >
                <Typography className="anim" variant="h4" component="h1">
                  ABOUT ME
                </Typography>
              </Box>
              <Box
                sx={{
                  pt: 2,
                  pb: 5,
                }}
              >
                <Typography variant="subtitle1" component="h1">
                  Hi there! I'm Rafat Saqqa, a passionate full-stack web
                  developer with a knack for creating intuitive, efficient, and
                  visually appealing web solutions. With 1 year of experience in
                  the industry, I thrive on turning ideas into reality through
                  the power of coding. Whether it's crafting sleek front-end
                  interfaces or architecting robust back-end systems, I'm
                  dedicated to delivering high-quality, scalable solutions that
                  exceed expectations. Let's collaborate and bring your digital
                  visions to life!
                </Typography>
              </Box>
            </>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
