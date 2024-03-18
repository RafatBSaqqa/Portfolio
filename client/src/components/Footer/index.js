import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Key, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Footer() {

  const state = useSelector((state) => {
    return {
      contact: state.contact.contact,
    };
  });
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        // minHeight: "50vh",
        // marginTop:"30vh"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I am Rafat , dedicated to providing the best service.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              63 Main Street, Amman, JO
            </Typography>
            {state.contact.map((res) => {
              return (
                <div Key={res.id}>
                  <Typography variant="body2" color="text.secondary">
                    Email: {res.mail}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {res.phone}
                  </Typography>
                </div>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow
            </Typography>
            <Link
              onClick={() =>
                window.open(`https://web.facebook.com/rafat.saqqa`, "_blank")
              }
              color="inherit"
            >
              <Facebook />
            </Link>
            <Link
              onClick={() =>
                window.open(`https://www.instagram.com/r400s/`, "_blank")
              }
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link
              onClick={() =>
                window.open(`https://twitter.com/RafatBSaqqa`, "_blank")
              }
              color="inherit"
            >
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" >
              Rafat
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
