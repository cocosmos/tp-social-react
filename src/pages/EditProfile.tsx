import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EmailField from "../components/Inputs/EmailField";
import PasswordField from "../components/Inputs/PasswordField";
import TextFieldInput from "../components/Inputs/TextField";
import { AuthContext } from "../contexts/AuthContext";

const EditProfile = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const emailRef = useRef({ value: "" });
  const passwordRef = useRef({ value: "" });
  const usernameRef = useRef({ value: "" });
  const fnameRef = useRef({ value: "" });
  const lnameRef = useRef({ value: "" });
  const bioRef = useRef({ value: "" });
  const navigate = useNavigate();
  let user = currentUser;
  // user.user["username"] = "u33uesffsf";
  const handleEditProfile = async (e: any) => {
    e.preventDefault();

    const url = `https://strapi-crea.jcloud-ver-jpc.ik-server.com/users/${currentUser.user.id}`;
    const headers = {
      Authorization: `Bearer ${currentUser.jwt}`,
    };

    let getForm: any = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      firstname: fnameRef.current.value,
      lastname: lnameRef.current.value,
      bio: bioRef.current.value,
    };
    let data: any = {};

    Object.keys(getForm).map((key: any) => {
      if (getForm[key]) {
        data[key] = getForm[key];
        user.user[key] = getForm[key];
      }
    });
    console.log(user);

    const dataToSend = JSON.stringify(data);
    axios
      .put(url, dataToSend, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.status);
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Stack>
      <form onSubmit={handleEditProfile}>
        <TextFieldInput
          nameRef={usernameRef}
          label={"Username"}
          id={"username"}
          required={false}
        />
        <TextFieldInput
          nameRef={fnameRef}
          label={"First Name"}
          id={"fname"}
          required={false}
        />
        <TextFieldInput
          nameRef={lnameRef}
          label={"Last Name"}
          id={"lname"}
          required={false}
        />
        <EmailField emailRef={emailRef} required={false} />
        <PasswordField
          passwordRef={passwordRef}
          label={"Password"}
          id={"password"}
          required={false}
        />

        <TextField
          id="biography"
          label="Biography"
          multiline
          rows={4}
          fullWidth
          variant="filled"
          inputRef={bioRef}
        />
        <Button
          type={"button"}
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            navigate("/");
          }}
        >
          Return
        </Button>
        <Button
          type={"submit"}
          variant="contained"
          color="primary"
          size="large"
        >
          Edit
        </Button>
      </form>
    </Stack>
  );
};

export default EditProfile;
