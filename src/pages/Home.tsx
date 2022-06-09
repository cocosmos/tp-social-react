import { Stack } from "@mui/material";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <Stack direction={"row"} spacing={3}>
        <Stack minWidth={500} spacing={5}>
          <Profile />
          <NewPost />
        </Stack>
        <Posts />
      </Stack>
    </>
  );
};

export default Home;
