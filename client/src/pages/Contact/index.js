import React from "react";
import { useState, useRef } from "react";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { fas, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";

library.add(fas, faEnvelope, faPhone);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  const [Done, setDone] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vmreyik",
        "template_6bu1axs",
        form.current,
        "Anio-g2jnL5d4HjS9"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Container>
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
          >
            <Grid item zeroMinWidth>
              <Item xs={6}>
                <Typography wrap p={2} variant="h6" component="h6">
                  <FontAwesomeIcon
                    className="iconSize "
                    icon="fa-solid fa-envelope"
                  />
                </Typography>
                <Typography p={2} variant="h6" component="h6">
                  Raafat.saqqa@gmail.com
                </Typography>
              </Item>
            </Grid>
            <Grid item zeroMinWidth>
              <Item xs={6}>
                <Typography p={2} variant="h6" component="h6">
                  <FontAwesomeIcon
                    className="iconSize "
                    icon="fa-solid fa-phone"
                  />
                </Typography>
                <Typography p={2} variant="h6" component="h6">
                  00962777396184
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
          <Typography variant="h4" align="center" mb={2}>
            Contact Me
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            {/* <input type="text" name="user_name" /> */}

            <TextField
              fullWidth
              label="Name"
              name="user_name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="user_email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              required
              multiline
              rows={4}
              name="message"
            />
            {Done && (
              <Alert severity="success">Message send successfully</Alert>
            )}
            <br />
            <button className="btn_style">Submit</button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
