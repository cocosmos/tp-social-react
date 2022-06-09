import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailField from "../components/Inputs/EmailField";
import PasswordField from "../components/Inputs/PasswordField";
import TextFieldInput from "../components/Inputs/TextField";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const emailRef = useRef({ value: "" });
  const passwordRef = useRef({ value: "" });
  const usernameRef = useRef({ value: "" });
  const fnameRef = useRef({ value: "" });
  const lnameRef = useRef({ value: "" });
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const url =
      "https://strapi-crea.jcloud-ver-jpc.ik-server.com/auth/local/register";

    axios
      .post(url, {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        firstname: fnameRef.current.value,
        lastname: lnameRef.current.value,
      })
      .then(function (response) {
        console.log(response.data);
        const user = response.data;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSignup}>
        <Stack spacing={3} alignItems={"center"}>
          <Avatar
            alt={username}
            sx={{ width: 200, height: 200 }}
            src={`https://avatars.dicebear.com/api/big-smile/${username}.svg`}
          />
          <Typography variant="h4">{username}</Typography>
          <TextField
            inputRef={usernameRef}
            label={"Username"}
            id={"username"}
            required={false}
            variant="filled"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextFieldInput
            nameRef={fnameRef}
            label={"First Name"}
            id={"fname"}
          />
          <TextFieldInput nameRef={lnameRef} label={"Last Name"} id={"lname"} />
          <EmailField emailRef={emailRef} />
          <PasswordField
            passwordRef={passwordRef}
            label={"Password*"}
            id={"password"}
          />
          <Button
            type={"submit"}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Register
          </Button>
        </Stack>
      </form>
      <Button
        type={"button"}
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => navigate("/login")}
        sx={{ mt: 5 }}
      >
        Login page
      </Button>
    </>
  );
};

export default Register;
