import { ThemeOptions } from "@mui/material";

export const fontWeights = {
  avenir: {
    300: 300,
    900: 900,
    400: 400,
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily: "avenir",
  fontWeightBold: fontWeights.avenir[900],
  fontWeightLight: fontWeights.avenir[300],
  fontWeightMedium: fontWeights.avenir[300],
  fontWeightRegular: fontWeights.avenir[300],

  body1: {
    fontSize: 20,
  },
  body2: {
    fontSize: 18,
  },
};

export default typography;
