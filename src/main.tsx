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
      <RouterProvider router={router} />
      <footer>
        <div className="finetwork-svg" />
        <div>
          <div className="fb" />
          <div className="yt" />
          <div />
        </div>
      </footer>
    </ThemeProvider>
  </React.StrictMode>
);
