import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Course from "../../img/Courses.png";
import MetaBook from "../../img/MetaBook.png";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Academia",
      description:
        "Welcome to Academia, in the site you will see list of courses depending in which category you click.",
      image: `${Course}`,
      githubrepo: "https://github.com/C9-RafatBSaqqa/E-learning",
      liveview: "https://e-lerning.netlify.app/",
    },
    {
      id: 2,
      title: "MetaBook",
      description:
        "It is a social networking platform similar to the Facebook platform, in which allows people to share their moments first.",
      image: `${MetaBook}`,
      githubrepo:
        "https://github.com/MetaBookTeam/MetaBook_PERN.stack_Social.Media.Platform",
      liveview: "https://c09-metabook.netlify.app/home",
    },
  ];
  return (
    <Container>
      <Box sx={{ my: 5, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          I share my best ideas in projects section
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {projects.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ display: "flex",
             width: {
              xs: "auto", //0
              sm: "auto", //600
              md: "auto", //900
              lg: "auto", //1200
              xl: "auto", // 1536
            }, }}>
              <CardMedia
                component="img"
                sx={{
                  width: {
                    xs: 100, //0
                    sm: 300, //600
                    md: 200, //900
                    lg: 200, //1200
                    xl: 200, // 1536
                  },
               
                }}
                image={post.image}
                alt={post.title}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto"
                 }}
                  >
                  <Typography component="h5" variant="h5" 
                     >
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary"
                        >
                    {post.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: {
                        xs: 0, //0
                        sm: 7, //600
                        md: 0, //900
                        lg: 8, //1200
                        xl: 8, // 1536
                      },
                      pb: 1,
                    }}
                  >
                    <IconButton
                      onClick={() =>
                        window.open(`${post.githubrepo}`, "_blank")
                      }
                    >
                      Github
                    </IconButton>

                    <IconButton
                      onClick={() => window.open(`${post.liveview}`, "_blank")}
                    >
                      Live View
                    </IconButton>
                  </Box>
                  <Box sx={{ ml: 1 }}>
                    <Typography variant="subtitle2">{post.author}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {post.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
