import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setBlog } from "../../Services/redux/reducers/Blog/blogSlice";

export default function EditBlog() {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
      return {
        blog: state.blog.blog,
        auth: state.auth.token,
      };
    });
    const BlogInformation = async () => {
        try {
          const result = await axios.get(`http://localhost:5000/blog`);
          dispatch(setBlog(result.data.result));
        } catch (error) {
          console.log(error);
        }
      };
  const [Done, setDone] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [title, setTitle] = useState(null);
  const UpdateData = async (blogId) => {
    const updateData = {
      aboutme: aboutMe,
      title: title,
      image: url,
    };
    console.log(updateData);
    try {
      const update = await axios.put(`http://localhost:5000/blog/${blogId}`, updateData, {
        headers: {
          authorization: `Bearer ${state.auth}`,
        },
      });
      console.log(update);
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
  useEffect(() => {
    BlogInformation()
  }, [])
  return (
   <>
     {state.blog.map((res) => {
      return (
        <div key={res.id}>
          <br/>
        <TextField
          id="standard-basic"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label={res.title}
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
            setAboutMe(e.target.value);
          }}
          label={res.aboutme}
          variant="standard"
        />

        {Done && <Alert severity="success">Changed successfully</Alert>}
        <Button onClick={() => {
          UpdateData(res.id)
          // setProjectId(res.id)
        }}>Save</Button>
      </div>
      );
    })}</>
  );
}
