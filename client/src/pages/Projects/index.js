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
import Link from '@mui/material/Link';

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
    <Container>
      {state.project.map((res) => {
        return (
          <Card
            key={res.id}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: 1,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
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
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Link targ href="" variant="body2">
                <IconButton onClick={()=> window.open("https://github.com/RafatBSaqqa/Portfolio", "_blank")} aria-label="previous">Github</IconButton>
                </Link>
                <IconButton aria-label="next">Live View</IconButton>
              
                  {'variant="body2"'}
                
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={`${res.image}`}
              alt={`${res.title}`}
            />
          </Card>
        );
      })}
    </Container>
  );
}
