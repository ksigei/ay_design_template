import { Theme } from "@mui/material/styles";
import Button from "./Button";

const components = (theme: Theme) => ({
  ...Button(theme),
});
export default components;
