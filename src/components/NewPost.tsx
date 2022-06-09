import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import TextFieldInput from "./Inputs/TextField";

const NewPost = () => {
  const titleRef = useRef({ value: "" });
  const contentRef = useRef({ value: "" });
  const { currentUser } = useContext(AuthContext);

  const handleNewPost = async (e: any) => {
    e.preventDefault();

    const url = "https://strapi-crea.jcloud-ver-jpc.ik-server.com/posts";
    const headers = {
      Authorization: `Bearer ${currentUser.jwt}`,
    };
    axios
      .post(
        url,
        {
          title: titleRef.current.value,
          content: contentRef.current.value,
          user: currentUser.user,
        },
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <form onSubmit={handleNewPost}>
        {/* <TextFieldInput nameRef={titleRef} label={"Title"} id={"title"} /> */}
        <TextField
          id={"title"}
          label={"Title"}
          inputRef={titleRef}
          variant="filled"
          type={"text"}
          fullWidth
          required
          autoComplete="on"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          fullWidth
          inputRef={contentRef}
        />
        <Button
          type={"submit"}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Create
        </Button>
      </form>
    </Box>
  );
};

export default NewPost;
