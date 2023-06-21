import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import Landing from "./pages/landing/Landing.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/auth/login/Login.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
