import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

const NewPost = () => {
  const handleNewPost = async (e: any) => {
    e.preventDefault();
    //  const url = "https://strapi-crea.jcloud-ver-jpc.ik-server.com/auth/local";

    /*     axios
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
      }); */
  };
  return (
    <Box>
      <form onSubmit={handleNewPost}>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
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
