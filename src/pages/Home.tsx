import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Profile />
      <NewPost />
      <Posts />
    </>
  );
};

export default Home;
