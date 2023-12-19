import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { ThemeProvider } from "@finetwork/ui";
import theme from "../styles/theme.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/HomePage/index.tsx";
import Checkout from "./views/Checkout/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <header>
        <div className="finetwork-svb-black" />
        <span>Llamanos GRATIS al 1777</span>
      </header>
      <RouterProvider router={router} />
      <footer>
        <div className="finetwork-svg" />
        <div className="separator" />
        <div className="options">
          <span>Aviso legal</span>
          <span>Pólitica de cookies</span>
          <span>Política de privacidad</span>
          <span>Términso y condiciones</span>
        </div>
      </footer>
    </ThemeProvider>
  </React.StrictMode>
);
