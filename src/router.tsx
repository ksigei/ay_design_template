import { createBrowserRouter } from "react-router-dom";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import MyAccount from "./sections/Profile/MyAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <MyAccount />,
      },
    ],
  },
]);

export default router;
