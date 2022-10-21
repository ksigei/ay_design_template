import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import GlobalStyles from "@mui/material/GlobalStyles";

import "./App.css";
import AppBar from "./components/AppBar";

import { ThemeProvider } from "./theme";
function App() {
  return (
    <ThemeProvider>
      <GlobalStyles
        styles={({ palette }) => ({
          body: {
            background: palette.background.paper,
          },
        })}
      />
      <AppBar />
    </ThemeProvider>
  );
}

export default App;
