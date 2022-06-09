import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <Stack
      maxWidth={500}
      textAlign="center"
      alignItems={"center"}
      spacing={2}
      sx={{ backgroundColor: "#e7fdff", p: 3, borderRadius: 20 }}
    >
      <Avatar
        alt={currentUser.user.firstname + " " + currentUser.user.lastname}
        sx={{ width: 80, height: 80 }}
        src={`https://avatars.dicebear.com/api/big-smile/${currentUser.user.username}.svg`}
      />
      <Typography variant="h5" gutterBottom>
        {currentUser.user.username}
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        {currentUser.user.firstname} {currentUser.user.lastname}
      </Typography>
      <Typography variant="body1">{currentUser.user.bio}</Typography>
      <Button
        type={"button"}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          navigate("edit");
        }}
      >
        Modify
      </Button>
    </Stack>
  );
};

export default Profile;
