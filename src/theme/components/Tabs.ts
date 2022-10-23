import { Components, Theme } from "@mui/material/styles";

export default function Tabs(_: Theme): Components {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  };
}
