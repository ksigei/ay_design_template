import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import GlobalStyles from "@mui/material/GlobalStyles";

import "./App.css";
import AppBar from "./components/AppBar";
import Page from "./components/Page";
import Landing from "./sections/Landing";
import ProgramStructure from "./sections/ProgramStructure";
import Schedule from "./sections/Schedule";

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
      <Page>
        {/* Top appbar */}
        <AppBar />

        {/* main landing */}
        <Landing />

        {/* structure of program */}
        <ProgramStructure />
      </Page>

      {/* schedule  */}

      <Schedule />
    </ThemeProvider>
  );
}

export default App;
