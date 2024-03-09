import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProject,
  updateProject,
} from "../../Services/redux/reducers/Project/projectSlice";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Container from "@mui/material/Container";

export default function Projects() {
  const theme = useTheme();

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      project: state.project.project,
    };
  });
  const contactInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/projects");
      dispatch(setProject(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    contactInformation();
  }, []);
  return (
    <div>
      {state.project.map((res) => {
        return (
          <div key={res.id}>
            <h1>{res.title}</h1>
            <p>{res.description}</p>
          </div>
        );
      })}
      <Container>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Container>
    </div>
  );
}
