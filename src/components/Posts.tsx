import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Post from "./Post";
import { PostType } from "../types/interface";
import NewPost from "./NewPost";

const Posts = () => {
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
    url: `https://strapi-crea.jcloud-ver-jpc.ik-server.com/posts`,
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
    <Stack spacing={6} mt={3}>
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
  );
};

export default Posts;
