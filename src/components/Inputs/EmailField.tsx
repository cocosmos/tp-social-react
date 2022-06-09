import { TextField } from "@mui/material";

const EmailField = ({ emailRef, required }: any) => {
  return (
    <TextField
      id="email"
      label="Email Adress"
      type={"email"}
      variant="filled"
      inputRef={emailRef}
      required={required}
      fullWidth
      color="secondary"
      autoComplete="on"
    />
  );
};

export default EmailField;
