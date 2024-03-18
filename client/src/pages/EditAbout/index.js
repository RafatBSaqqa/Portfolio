import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EditAbout() {
  const [Done, setDone] = useState(false);
  const state = useSelector((state) => {
    return {
      auth: state.auth.token,
    };
  });
  const [aboutMe, setAboutMe] = useState(null);
  const [title, setTitle] = useState(null);

  const changeData = async () => {
    const updateData = {
      aboutme: aboutMe,
      title: title,
    };
    try {
      const update = await axios.put(
        `https://portfolio-41ta.onrender.com//aboutme`,
        updateData,
        {
          headers: {
            authorization: `Bearer ${state.auth}`,
          },
        }
      );
      setDone(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        label="Title"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        onChange={(e) => {
          setAboutMe(e.target.value);
        }}
        label="About me"
        variant="standard"
      />
      {Done && <Alert severity="success">Changed successfully</Alert>}
      <Button onClick={changeData}>Save</Button>
    </div>
  );
}
