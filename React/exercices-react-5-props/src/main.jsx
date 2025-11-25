import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Exercice1Parent from "./pages/Exercice1Parent.jsx";
import Exercice2Parent from "./pages/Exercice2Parent.jsx";
import Exercice3Parent from "./pages/Exercice3Parent.jsx";
import Exercice4Parent from "./pages/Exercice4Parent.jsx";
import Exercice5Parent from "./pages/Exercice5Parent.jsx";
import Exercice6Parent from "./pages/Exercice6Parent.jsx";
import Exercice7Parent from "./pages/Exercice7Parent.jsx";
import Exercice8Parent from "./pages/Exercice8Parent.jsx";
import Exercice9Parent from "./pages/Exercice9Parent.jsx";
import Exercice10Parent from "./pages/Exercice10Parent.jsx";
import Exercice11Parent from "./pages/Exercice11Parent.jsx";
import Exercice12Parent from "./pages/Exercice12Parent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exo1",
    element: <Exercice1Parent />,
  },
  {
    path: "/exo2",
    element: <Exercice2Parent />,
  },
  {
    path: "/exo3",
    element: <Exercice3Parent />,
  },
  {
    path: "/exo4",
    element: <Exercice4Parent />,
  },
  {
    path: "/exo5",
    element: <Exercice5Parent />,
  },
  {
    path: "/exo6",
    element: <Exercice6Parent />,
  },
  {
    path: "/exo7",
    element: <Exercice7Parent />,
  },
  {
    path: "/exo8",
    element: <Exercice8Parent />,
  },
  {
    path: "/exo9",
    element: <Exercice9Parent />,
  },
  {
    path: "/exo10",
    element: <Exercice10Parent />,
  },
  {
    path: "/exo11",
    element: <Exercice11Parent />
  },
  {
    path: "/exo12",
    element: <Exercice12Parent />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
