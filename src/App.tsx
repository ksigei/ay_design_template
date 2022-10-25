import GlobalStyles from "@mui/material/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { fonts } from "./constants";

import router from "./router";
import Footer from "./sections/Footer";

import { ThemeProvider } from "./theme";
function App() {
  return (
    <ThemeProvider>
      <GlobalStyles
        styles={({ palette }) => ({
          body: {
            background: palette.background.paper,
            fontFamily: fonts.avenir,
          },
        })}
      />
      <RouterProvider router={router} />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
