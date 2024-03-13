import { Button, TextField, Alert, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Project from "../../components/Project";

export default function DeleteProjects() {
  const [Done, setDone] = useState(false);
  const state = useSelector((state) => {
    return {
      auth: state.auth.token,
    };
  });

  const changeData = async () => {
    try {
      const result = await axios.put(`http://localhost:5000/home`, {
        headers: {
          authorization: `Bearer ${state.auth}`,
        },
      });
      setDone(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Project/>

      <TextField
        id="standard-basic"
        onChange={(e) => {
          // setPosition(e.target.value);
        }}
        label="position"
        variant="standard"
      />
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>

      </Box>
      <TextField
        id="standard-basic"
        onChange={(e) => {
          // setBio(e.target.value);
        }}
        label="bio"
        variant="standard"
      />
      {Done && <Alert severity="success">Changed successfully</Alert>}
      <Button onClick={changeData}>Save</Button>
    </div>
  );
}
