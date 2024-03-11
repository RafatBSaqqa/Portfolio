import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../../Services/redux/reducers/Project/projectSlice";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Project() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      project: state.project.project,
    };
  });
  const projectsInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/projects");
      dispatch(setProject(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    projectsInformation();
  }, []);

  return (
    <Container style={state}>
      {state.project.map((res) => {
        return (
          <Card
            key={res.id}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: 2,
              margin:2,
              bgcolor:"white",
              flexWrap:"wrap",
            }}
          
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto",pl: {
                  xs:15, //0
                  sm:8, //600
                  md:8, //900
                  lg:8, //1200
                  xl:8, // 1536
              } }}>
                <Typography sx={{ color:"#1bc78a" }}  component="div" variant="h5">
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
              <Box sx={{ display: "flex", alignItems: "center", pl: {
                  xs:14, //0
                  sm:7, //600
                  md:7, //900
                  lg:8, //1200
                  xl:8, // 1536
              }, pb: 1 }}>
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
        );
      })}
    </Container>
  );
}
