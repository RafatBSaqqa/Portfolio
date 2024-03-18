import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EditHome() {
  const [Done, setDone] = useState(false);
  const state = useSelector((state) => {
    return {
      auth: state.auth.token,
    };
  });

  const [image, setImage] = useState("");
  const [url, setUrl] = useState(null);
  const [position, setPosition] = useState(null);
  const [bio, setBio] = useState(null);
  const changeData = async () => {
    const create = {
      position: position,
      bio: bio,
      image: url,
    };
    try {
      const result = await axios.put(`https://rafat-saqqa.onrender.com/home`, create, {
        headers: {
          authorization: `Bearer ${state.auth}`,
        },
      });
      setDone(true);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage = () => {
    console.log(image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "luipbyrc");
    data.append("cloud_name", "dwenerokk");
    fetch("https://api.cloudinary.com/v1_1/dwenerokk/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        onChange={(e) => {
          setPosition(e.target.value);
        }}
        label="position"
        variant="standard"
      />
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <Button
          onClick={(e) => {
            e.preventDefault();
            uploadImage();
          }}
          id="standard-basic"
          label="image"
          variant="standard"
        >
          Upload
        </Button>
      </Box>
      <TextField
      fullWidth 
        id="standard-basic"
        onChange={(e) => {
          setBio(e.target.value);
        }}
        label="bio"
        variant="standard"
      />
      {Done && <Alert severity="success">Changed successfully</Alert>}
      <Button onClick={changeData}>Save</Button>
    </div>
  );
}
