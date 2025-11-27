import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Exercice1 from "./pages/Exercice1.jsx";
import About from "./pages/About.jsx";
import Exercice2 from "./pages/Exercice2.jsx";
import ChangerMessage from "./pages/ChangerMessage.jsx";
import Exercice3 from "./pages/Exercice3.jsx";
import Exercice4 from "./pages/Exercice4.jsx";
import Exercice5 from "./pages/Exercice5.jsx";
import { MessageContextProvider } from "./context/MessageContext.jsx";
import ChangeUsername from "./pages/ChangeUsername.jsx";
import AddNotification from "./pages/AddNotification.jsx";
import { CounterContextProvider } from "./context/CounterContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exo1",
    element: <Exercice1 />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/exo2",
    element: <Exercice2 />,
  },
  {
    path: "/change-message",
    element: <ChangerMessage />,
  },
  {
    path: "/exo3",
    element: <Exercice3 />,
  },
  {
    path: "/change-username",
    element: <ChangeUsername />,
  },
  {
    path: "/exo4",
    element: <Exercice4 />,
  },
  {
    path: "/add-notification",
    element: <AddNotification />,
  },
  {
    path: "/exo5",
    element: <Exercice5 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CounterContextProvider>
    <MessageContextProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </MessageContextProvider>
  </CounterContextProvider>,
);
