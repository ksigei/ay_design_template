import { Theme } from "@mui/material/styles";
import Buttons from "./Buttons";
import Tabs from "./Tabs";

const components = (theme: Theme) =>
  Object.assign({}, Buttons(theme), Tabs(theme));
export default components;
