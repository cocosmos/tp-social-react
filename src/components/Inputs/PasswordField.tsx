import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

const PasswordField = ({ passwordRef, id, label, required }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDown = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <FormControl variant="filled" fullWidth color="secondary">
      <InputLabel htmlFor="passwordLogin">{label}</InputLabel>
      <FilledInput
        autoFocus={false}
        required={required}
        id={id}
        type={showPassword ? "text" : "password"}
        inputRef={passwordRef}
        inputProps={{ minLength: 8 }}
        autoComplete="on"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClick}
              onMouseDown={handleMouseDown}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordField;
