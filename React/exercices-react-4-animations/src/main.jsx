import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import Exercice1 from "./pages/Exercice1.jsx";
import Exercice2 from "./pages/Exercice2.jsx";

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
    path: "/exo2",
    element: <Exercice2 />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
