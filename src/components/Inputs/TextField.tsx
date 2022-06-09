import { TextField } from "@mui/material";

const TextFieldInput = ({ nameRef, label, id, required }: any) => {
  return (
    <TextField
      id={id}
      label={label}
      inputRef={nameRef}
      variant="filled"
      type={"text"}
      fullWidth
      required={required}
      autoComplete="on"
    />
  );
};

export default TextFieldInput;
