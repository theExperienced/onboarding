import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Modal, Typography } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SimpleForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [isLogged, setLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      client_name: name,
      client_email: email,
      client_phone: phone,
      client_company: company,
    };

    console.log("data", data);
    axios
      .post("http://10.0.0.197:3030/api/contact", data)
      .then((res) => {
        console.log("login res", res);
        if (res.status === 200) {
          setLogged(true);
          ////////////////save uuid in redux
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    switch (id) {
      case "client_name":
        setName(value);
      case "client_email":
        setEmail(value);
      case "client_phone":
        setPhone(value);
      case "client_company":
        setCompany(value);
      default:
        return null;
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid
          container
          justifyContent="center"
          sx={{ display: "flex", flexGrow: "1", marginTop: "100px" }}
        >
          <Grid
            direction="column"
            alignItems="flex-start"
            sx={{ display: "flex", marginRight: "20px", color: "white" }}
          >
            <TextField
              required
              onChange={handleChange}
              id="client_name"
              label="Name"
              margin="normal"
              sx={{ border: "solid 1px grey" }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
            <TextField
              required
              onChange={handleChange}
              id="client_email"
              label="Email"
              margin="normal"
              sx={{ border: "solid 1px grey" }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
          </Grid>
          <Grid style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              onChange={handleChange}
              id="client_phone"
              label="Phone"
              multiline
              maxRows={9}
              rows="9"
              sx={{ border: "solid 1px grey" }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
            <TextField
              required
              onChange={handleChange}
              id="client_company"
              label="Company"
              multiline
              maxRows={9}
              rows="9"
              sx={{ border: "solid 1px grey" }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
            <Button
              sx={{
                color: "#f1783f",
                width: "100px",
                border: "solid 3px #f1783f",
                margin: "2px",
                display: "block",
                margintop: "24px",
                marginLeft: "auto",
              }}
              type="submit"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Modal open={isLogged}>
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Success!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You can now proceed to the link sent to you number you provided
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default SimpleForm;
