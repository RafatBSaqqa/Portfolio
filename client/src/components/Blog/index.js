import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ArrowForward } from "@mui/icons-material";
import { setBlog } from "../../Services/redux/reducers/Blog/blogSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Blog() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      blog: state.blog.blog,
    };
  });
  const aboutInformation = async () => {
    try {
      const result = await axios.get("https://portfolio-41ta.onrender.com//blog");
      dispatch(setBlog(result.data.result));
      console.log(result);
    } catch (error) {}
  };
  useEffect(() => {
    aboutInformation();
  }, []);
  return (
    <Container sx={{ py: { xs: 8, lg: 16 } }}>
      <Box
        sx={{
          mx: "auto",
          mb: { lg: 16, sm: 8 },
          maxWidth: "sm",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          mb={4}
          sx={{ fontWeight: "extrabold" }}
        >
          Professional Journey
        </Typography>
        {/* <Typography variant="body1" color="text.secondary">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </Typography> */}
      </Box>
      <Grid container spacing={8}>
        {state.blog.map((data, i) => (
          <Grid item lg={6} key={i}>
            <Box
              sx={{
                p: 6,
                border: 1,
                borderColor: "grey.200",
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                mb={2}
                sx={{ fontWeight: "bold" }}
              >
                {data.title}
              </Typography>
              <Typography  variant="body2" color="text.secondary" mb={5}>
                {data.aboutme}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img  width={228} height={328} src={data.image}/>
                  {/* <Avatar
                    src={data.image}
                    sx={{ width: 128, height: 128, mr: 1 }}
                  /> */}
                  <Typography variant="subtitle1">{data.author}</Typography>
                </Box>
         
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
