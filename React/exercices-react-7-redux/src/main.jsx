import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Exercice1 from "./pages/Exercice1.jsx";
import Exercice2 from "./pages/Exercice2.jsx";
import Exercice3 from "./pages/Exercice3.jsx";
import Exercice4 from "./pages/Exercice4.jsx";
import Exercice5 from "./pages/Exercice5.jsx";

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
    element: <Exercice2 />,
  },
  {
    path: "/exo3",
    element: <Exercice3 />,
  },
  {
    path: "/exo4",
    element: <Exercice4 />,
  },
  {
    path: "/exo5",
    element: <Exercice5 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
