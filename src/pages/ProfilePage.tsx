import { PostType, User } from "../types/interface";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

const ProfilePage = (props: { userData: User }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [getPosts, setGetPosts] = useState<PostType[]>([
    {
      content: "",
      created_at: "",
      id: 0,
      title: "",
      updated_at: "",
      user: {
        id: 0,
        username: "",
        email: "",
        firstname: "",
        lastname: "",
      },
    },
  ]);
  const options = {
    url: `https://strapi-crea.jcloud-ver-jpc.ik-server.com/posts?user=${props.userData.id}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${currentUser.jwt}`,
    },
  };
  const fetchPosts = () => {
    axios(options)
      .then((response) => {
        setGetPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  getPosts.sort((a, b) =>
    a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0
  );
  return (
    <>
      <Stack spacing={3} alignItems={"center"} mb={5}>
        <Avatar
          alt={props.userData.username}
          sx={{ width: 200, height: 200 }}
          src={`https://avatars.dicebear.com/api/big-smile/${props.userData.username}.svg`}
        />
        <Typography variant="h5" gutterBottom component="div">
          {props.userData.username}
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          {props.userData.firstname} {props.userData.lastname}
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          {props.userData.bio}
        </Typography>
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
      </Stack>
      <Divider />
      <Stack spacing={5}>
        {getPosts ? (
          getPosts.map((postData) => {
            return (
              <Box key={postData.id}>
                <Post postData={postData} />
              </Box>
            );
          })
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Stack>
    </>
  );
};

export default ProfilePage;
