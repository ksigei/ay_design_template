import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import GlobalStyles from "@mui/material/GlobalStyles";

import "./App.css";
import AppBar from "./components/AppBar";
import Landing from "./sections/Landing";

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
      {/* Top appbar */}
      <AppBar />

      {/* main landing */}
      <Landing />
    </ThemeProvider>
  );
}

export default App;
