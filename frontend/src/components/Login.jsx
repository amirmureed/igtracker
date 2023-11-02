import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavBar from "./Navbar";

export default function Login() {
  return (
    <>
      <NavBar />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" },
          width: 700,
          maxWidth: "100%",
          mx: "auto",
          mt: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h1>Login</h1>
          <TextField label="Email" id="email" type="email" size="Normal" />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button sx={{ ml: 1, mt: 3 }} variant="contained">
            Login
          </Button>
        </div>
      </Box>
    </>
  );
}
