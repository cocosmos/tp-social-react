import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Post from "./Post";

const Posts = () => {
  const { currentUser } = useContext(AuthContext);
  const [getPosts, setGetPosts] = useState([{}]);
  const options = {
    url: "https://strapi-crea.jcloud-ver-jpc.ik-server.com/posts",
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
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(getPosts);

  return (
    <Stack>
      {getPosts ? (
        getPosts.map((postData) => {
          console.log(postData);
          return <Post postData={postData} />;
        })
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Stack>
  );
};

export default Posts;
