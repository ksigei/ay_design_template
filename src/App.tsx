import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import GlobalStyles from "@mui/material/GlobalStyles";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import router from "./router";

import { ThemeProvider } from "./theme";
function App() {
  return (
    <ThemeProvider>
      <GlobalStyles
        styles={({ palette }) => ({
          body: {
            background: palette.background.paper,
            fontFamily: "avenir",
          },
        })}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
