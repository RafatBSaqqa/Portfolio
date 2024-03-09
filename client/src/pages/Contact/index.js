import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import {
  setContact,
  updateContact,
} from "../../Services/redux/reducers/Contact/contactSlice";
import axios from "axios";
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
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      contact: state.contact.contact,
    };
  });
  const contactInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/contact");
      dispatch(setContact(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    contactInformation();
  }, []);
  console.log(form);
  return (
    <div>
      {state.contact.map((res) => {
        return (
          <Container key={res.id}>
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
                      <MailIcon />
                    </Typography>
                    <Typography p={2} variant="h6" component="h6">
                      {res.mail}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item zeroMinWidth>
                  <Item xs={6}>
                    <Typography p={2} variant="h6" component="h6">
                      <LocalPhoneIcon />
                    </Typography>
                    <Typography p={2} variant="h6" component="h6">
                      {res.phone}
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
        );
      })}
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
            Contact Us
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
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
