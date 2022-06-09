import { Box, Stack } from "@mui/material";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <Stack
        minWidth={500}
        maxWidth={300}
        spacing={5}
        position={"fixed"}
        sx={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <Profile />
        <NewPost />
      </Stack>
      <Stack direction={"row"} spacing={3} justifyContent={"flex-end"}>
        <Box maxWidth={500}>
          <Posts />
        </Box>
      </Stack>
    </>
  );
};

export default Home;
