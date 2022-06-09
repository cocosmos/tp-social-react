import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Stack maxWidth={500} textAlign="center" alignItems={"center"}>
      <Avatar />
      <Typography>{currentUser.user.firstname}</Typography>
      <Typography>{currentUser.user.lastname}</Typography>
      <Button
        type={"button"}
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >
        Modifier
      </Button>
    </Stack>
  );
};

export default Profile;
