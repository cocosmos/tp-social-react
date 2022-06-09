import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useContext, useRef } from "react";
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
      <h1>register</h1>
      <form onSubmit={handleSignup}>
        <Stack spacing={2}>
          <TextFieldInput
            nameRef={usernameRef}
            label={"Username"}
            id={"username"}
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
    </>
  );
};

export default Register;
