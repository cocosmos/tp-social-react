import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <Stack maxWidth={500} textAlign="center" alignItems={"center"}>
      <Avatar />
      <Typography>{currentUser.user.firstname}</Typography>
      <Typography>{currentUser.user.lastname}</Typography>
      <Typography>{currentUser.user.bio}</Typography>
      <Button
        type={"button"}
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={() => {
          navigate("edit");
        }}
      >
        Modifier
      </Button>
    </Stack>
  );
};

export default Profile;
