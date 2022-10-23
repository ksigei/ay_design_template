import { Components, Theme } from "@mui/material/styles";

export default function Buttons(_: Theme): Components {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeSmall: {
          borderRadius: 10,
        },
        sizeMedium: {
          borderRadius: 16,
        },
        sizeLarge: {
          borderRadius: 20,
        },
      },
    },
  };
}
