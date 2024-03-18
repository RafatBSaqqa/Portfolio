import { Button, TextField, Alert, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CreateProjects() {
  const [Done, setDone] = useState(false);
  const state = useSelector((state) => {
    return {
      auth: state.auth.token,
    };
  });
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [githubrepo, setGithubrepo] = useState(null);
  const [liveview, setLiveview] = useState(null);

  const NewData = async () => {
    const Create = {
      title: title,
      description: description,
      image: url,
      githubrepo: githubrepo,
      liveview: liveview,
    };
    try {
      const result = await axios.post(`https://rafat-saqqa.onrender.com/projects`, Create, {
        headers: {
          authorization: `Bearer ${state.auth}`,
        },
      });
      console.log(result);
      setDone(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Upload image
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
          setTitle(e.target.value);
        }}
        label="Title"
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
          setDescription(e.target.value);
        }}
        label="Description"
        variant="standard"
      />
      <br />
      <TextField
      fullWidth
        id="standard-basic"
        onChange={(e) => {
          setGithubrepo(e.target.value);
        }}
        label="GitHub Repo Link"
        variant="standard"
      />
      <br />
      <TextField
      fullWidth
        id="standard-basic"
        onChange={(e) => {
          setLiveview(e.target.value);
        }}
        label="Live View Link"
        variant="standard"
      />
      {Done && <Alert severity="success">Changed successfully</Alert>}
      <Button onClick={NewData}>Save</Button>
    </div>
  );
}
