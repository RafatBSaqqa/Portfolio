import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Course from "../../img/Courses.png"
import MetaBook from "../../img/MetaBook.png"

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Academia",
      description: "Welcome to Academia, in the site you will see list of courses depending in which category you click.",
      image: `${Course}`,
      githubrepo: "https://github.com/C9-RafatBSaqqa/E-learning",
      liveview: "https://e-lerning.netlify.app/",
    },
    {
      id: 2,
      title: "MetaBook",
      description: "It is a social networking platform similar to the Facebook platform, in which allows people to share their moments first.",
      image: `${MetaBook}`,
      githubrepo: "https://github.com/MetaBookTeam/MetaBook_PERN.stack_Social.Media.Platform",
      liveview: "https://c09-metabook.netlify.app/home",
    },
  ];
  return (
    <Container>
      <Typography
        variant="h3"
        component="h2"
        mb={4}
        sx={{ fontWeight: "extrabold", textAlign: "center" }}
      >
        Projects
      </Typography>
      {projects.reverse().map((res) => {
        return (
          <>
            <Card
              key={res.id}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                padding: 2,
                margin: 2,
                bgcolor: "white",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    pl: {
                      xs: 15, //0
                      sm: 8, //600
                      md: 8, //900
                      lg: 8, //1200
                      xl: 8, // 1536
                    },
                  }}
                >
                  <Typography
                    sx={{ color: "#1bc78a" }}
                    component="div"
                    variant="h5"
                  >
                    {res.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    width={400}
                  >
                    {res.description}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: {
                      xs: 14, //0
                      sm: 7, //600
                      md: 7, //900
                      lg: 8, //1200
                      xl: 8, // 1536
                    },
                    pb: 1,
                  }}
                >
                  <IconButton
                    onClick={() => window.open(`${res.githubrepo}`, "_blank")}
                  >
                    Github
                  </IconButton>

                  <IconButton
                    onClick={() => window.open(`${res.liveview}`, "_blank")}
                  >
                    Live View
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ boxShadow: 5 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 350 }}
                  image={`${res.image}`}
                  alt={`${res.title}`}
                />
              </Box>
            </Card>

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
            ></Box>
          </>
        );
      })}
    </Container>
  );
}
