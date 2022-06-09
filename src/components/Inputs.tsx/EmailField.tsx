import { TextField } from "@mui/material";

const EmailField = ({ emailRef }: any) => {
  return (
    <TextField
      id="email"
      label="Email Adress"
      type={"email"}
      variant="filled"
      inputRef={emailRef}
      required
      fullWidth
      color="secondary"
      autoComplete="on"
    />
  );
};

export default EmailField;
