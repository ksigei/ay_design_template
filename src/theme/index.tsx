import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import React from "react";
import components from "./components";
import defaultTheme from "./theme";

type Props = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const theme = React.useMemo(() => {
    const theme = createTheme(defaultTheme);
    theme.components = components(theme);

    return theme;
  }, []);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
