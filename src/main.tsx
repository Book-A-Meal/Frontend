import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import Landing from "./pages/landing/Landing.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/auth/user/login/Login.tsx";
import { Signup } from "./pages/auth/user/signup/Signup.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },

  // For user
  { path: "/user/login", element: <Login /> },
  { path: "/user/register", element: <Signup /> },

  // For Admin
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
