import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbout,
  updateAbout,
} from "../../Services/redux/reducers/About/aboutSlice";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReactDOM from "react-dom";
import { Container } from "@mui/material";

export default function About() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      about: state.about.about,
    };
  });
  const aboutInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/about");
      dispatch(setAbout(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    aboutInformation();
  }, []);
  return (
    <>
      {" "}
      <div className="about_section">
        <Container>
          <Box
            sx={{
              height: 128,
            }}
          >
            <h2>About me</h2>
          </Box>
        </Container>
        
      </div>
      
      {state.about.map((res) => {
        return (
          <div key={res.id}>
            <h1>{res.title}</h1>
            <h4>{res.aboutme}</h4>
            <h4>{res.image}</h4>
          </div>
        );
      })}
    </>
  );
}
