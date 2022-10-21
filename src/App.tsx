import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import AppBar from "./components/AppBar";

import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <AppBar />
    </ThemeProvider>
  );
}

export default App;
