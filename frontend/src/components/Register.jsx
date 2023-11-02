import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NavBar from "./Navbar";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is Required*"),
    lastname: Yup.string().required("Last Name is required*"),
    email: Yup.string().email().required("Email is Required*"),
    profession: Yup.string(),
    password: Yup.string()
      .required()
      .min(8, "Password should have at least 8 chars"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Both Passwords must match*"
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const formResponse = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <NavBar />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          width: 700,
          maxWidth: "100%",
          mx: "auto",
          mt: 5,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(formResponse)}
      >
        <div>
          <h1>Sign Up Form</h1>
          <TextField
            label="First Name"
            id="firstName"
            size="Normal"
            helperText={errors.firstname?.message}
            {...register("firstname")}
          />
          <TextField
            label="Last Name"
            id="lastName"
            size="Normal"
            helperText={errors.lastname?.message}
            {...register("lastname")}
          />
          <TextField
            label="Email"
            id="email"
            type="email"
            size="Normal"
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            label="Profession"
            id="profession"
            size="Normal"
            helperText={errors.profession?.message}
            {...register("profession")}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            helperText={errors.password?.message}
            {...register("password")}
          />
          <TextField
            id="confirm-password"
            label="Confirm Password"
            type="password"
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
          <TextField type="submit" size="small" />
        </div>
      </Box>
    </>
  );
}
