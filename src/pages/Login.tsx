import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EmailField from "../components/Inputs/EmailField";
import PasswordField from "../components/Inputs/PasswordField";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const emailRef = useRef({ value: "" });
  const passwordRef = useRef({ value: "" });
  const navigate = useNavigate();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const url = "https://strapi-crea.jcloud-ver-jpc.ik-server.com/auth/local";

    axios
      .post(url, {
        identifier: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then(function (response: { data: any }) {
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
      <h1>login</h1>
      <form onSubmit={handleLogin}>
        <Stack spacing={2}>
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
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Login;
